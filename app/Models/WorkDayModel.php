<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WorkDayModel extends Model
{
    protected $fillable = [
        'year',
        'month',
        'work_day',
        'created_by',
        'updated_by',
    ];

    protected $table = 'work_days';


    public function getAll(): LengthAwarePaginator
    {
        return WorkDayModel::query()->paginate(500);
    }

    public function getAllByYear($year): array
    {
        $list = [];
        for ($month = 0; $month < 12; $month++) {
            $query = WorkDayModel::query()->where('year', $year)->where('month', $month + 1)->first();
            if ($query) {
                $list[$month] = $query->toArray();
            } else {
                $list[$month] = [
                    'year' => $year,
                    'month' => $month + 1,
                    'work_day' => 0,
                    'created_by' => '-',
                    'updated_by' => '-',
                    'created_at' => '-',
                    'updated_at' => '-',
                ];
            }
        }
        return $list;
    }

    public function storeOrUpdate($data)
    {
        try {

            $check = WorkDayModel::query()
                ->where('year', $data['year'])
                ->where('month', $data['month'])
                ->first();
            DB::beginTransaction();
            if ($check) {
                $check->update([
                    'work_day' => $data['work_day'],
                    'updated_by' => auth()->user()->username,
                ]);
            } else {
                $store = WorkDayModel::query()->create([
                    'year' => $data['year'],
                    'month' => $data['month'],
                    'work_day' => $data['work_day'],
                    'created_by' => auth()->user()->username,
                    'updated_by' => auth()->user()->username,
                ]);
                if (!$store) {
                    throw new \Exception('hello');
                }
            }
            DB::commit();
            return [
                'status' => true,
                'message' => 'created successfully',
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'status' => false,
                'message' => $e->getMessage(),
            ];
        }

    }
}
