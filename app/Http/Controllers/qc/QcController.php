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
        if (isset($request->year)) {
            $year = $request->year;
        } else {
            $year = Carbon::now()->format('Y');
        }
        $QcBaseMOdel = new QcBaseModel();
        $list = $QcBaseMOdel->getCountQcLogOfYearMonth($year);
        $listReal = [];
        for ($i = 1; $i <= 12; $i++) {
            $m_count = 0;
            $month = $i;
            foreach ($list as $item) {
                // dd($item->kMonth,$i);
                if ($item->kMonth === $i) {
                    $month = $item->kMonth;
                    $m_count = $item->k_month_count;
                    break;
                }
            }
            $listReal[] = [
                'Kmonth' => $month,
                'k_month_count' => $m_count,
            ];
        }
        return response()->json([
            'list' => $listReal,
            'year' => $year,
        ]);
    }
}
