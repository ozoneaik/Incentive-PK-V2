<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QualityControlLevelController extends Controller
{
    public function index(){
        return Inertia::render('QualityControlLevel/QcLevelList');
    }
}
