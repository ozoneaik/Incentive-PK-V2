<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QualityControlGradeController extends Controller
{
    public function index(){
        return Inertia::render('QualityControlGrade/QcGradeList');
    }
}
