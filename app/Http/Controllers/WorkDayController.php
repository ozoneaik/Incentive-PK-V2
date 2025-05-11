<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkDayController extends Controller
{
    public function index(){
        return Inertia::render('WorkDay/WdList');
    }
}
