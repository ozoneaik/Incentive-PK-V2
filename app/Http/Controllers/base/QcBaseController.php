<?php

namespace App\Http\Controllers\base;

use App\Http\Controllers\Controller;
use App\Models\QcBaseModel;

class QcBaseController extends Controller
{
    public function index() {
        $model = new QcBaseModel();
        $list = $model->getQcLogData('2025-04-01', '2025-04-30');
        return response()->json([
            'list' => $list,
        ]);
    }

    public function test() {
        $model = new QcBaseModel();
        $list = $model->getCountQcLogOfYearMonth('2025');
        return response()->json([
            'list' => $list,
        ]);
    }
}
