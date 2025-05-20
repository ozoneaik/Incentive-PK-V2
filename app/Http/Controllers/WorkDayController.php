<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkDay\workdayRequest;
use App\Models\WorkDayModel;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class WorkDayController extends Controller
{
    public function index(): Response
    {
        $year = Carbon::now()->year;
        $query = new WorkDayModel();
        $list = $query->getAllByYear($year);
        return Inertia::render('WorkDay/WdList', [
            'list' => $list,
        ]);
    }

    public function store(workdayRequest $request): RedirectResponse
    {
        try {
            $req = $request->all();
            $store = new WorkDayModel();
            $create = $store->storeOrUpdate($req);
            if ($create['status']) {
                return Redirect::route('workday.index')->with('success', $create['message']);
            } else {
                throw new \Exception($create['message']);
            }
        } catch (\Exception $e) {
            return Redirect::route('workday.index')->with('error', $e->getMessage());
        }
    }
}
