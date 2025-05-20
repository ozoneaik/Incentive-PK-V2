<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class QcBaseModel extends Model
{
    protected $connection = 'pgsql_port_30';
    protected $table = 'qc_log_data';
    protected $primaryKey = 'id';


    public function getQcLogData($startDate, $endDate): Collection
    {
        return DB::connection('pgsql_port_30')
            ->table('qc_log_data as ld') // ← เพิ่ม alias ตรงนี้
            ->select(
                'ld.id',
                'ld.datekey',
                DB::raw('MONTH(ld.datekey) as KMonth'),
                'ld.empkey',
                'ld.empqc',
                'qu.emp_name',
                'ld.skucode',
                'p.pname',
                'p.timeperpcs',
                'lv.levelname'
            )
            ->leftJoin('qc_prod as p', 'ld.skucode', '=', 'p.pid')
            ->leftJoin('qc_level as lv', 'p.levelid', '=', 'lv.levelid')
            ->leftJoin('qc_user as qu', 'ld.empqc', '=', 'qu.emp_no')
            ->whereBetween('ld.datekey', [$startDate, $endDate])
            ->get();
    }

    public function getCountQcLogOfYearMonth($year, $month)
    {
        $startDate = $year . '-' . $month . '-01';
        $endDate = $year . '-' . $month . '-31';
        $target = DB::connection('pgsql_port_30')
            ->table('qc_log_data as ld')
            ->select(
                DB::raw('MONTH(datekey) as kMonth'),
                DB::raw('COUNT(datekey) as k_month_count')
            )
            ->leftJoin('qc_prod as p', 'ld.skucode', '=', 'p.pid')
            ->whereBetween('ld.datekey', [$startDate, $endDate])
            ->groupBy('kMonth')->get();
        if (count($target) > 0) {
            $t = (object)$target[0];
            return $t->k_month_count;
        } else {
            return 0;
        }
    }

}
