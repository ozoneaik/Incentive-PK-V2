<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function LogLocal(){
        return Inertia::render('QcLog/QcLogList');
    }
}
