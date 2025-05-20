<?php

namespace App\Http\Controllers\qc;

use App\Http\Controllers\Controller;
use App\Models\QcBaseModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QcController extends Controller
{
    public function index(Request $request)
    {
        $year_now = Carbon::now()->year;
        $month_now = Carbon::now()->month;

        if (isset($request->year)) {
            $year = $request->year;
        } else {
            $year = Carbon::now()->format('Y');
        }
        $QcBase_Model = new QcBaseModel();
        $listReal = [];
        for ($month = 1; $month <= 12; $month++) {
            if ($year == $year_now) {
                if ($month_now > $month) {
                    $target = $QcBase_Model->getCountQcLogOfYearMonth($year, $month);
                }else $target = 0;
            }elseif ($year_now > $year) {
                $target = $QcBase_Model->getCountQcLogOfYearMonth($year, $month);
            }else $target = 0;
            $listReal[$month - 1]['k_month_count'] = $target ?? 0;
            $listReal[$month - 1]['k_month'] = $month;
        }
        return response()->json([
            'list' => $listReal,
            'year' => $year,
        ]);
    }
}
