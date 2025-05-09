<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductQcController extends Controller
{
    public function index(Request $request){
        $query = User::query();
        if (isset($request->sku_code)) {
            $query->where('sku_code', 'like', '%' . $request->sku_code . '%');
        }

        if (isset($request->product_name)) {
            $query->where('product_name', 'like', '%' . $request->product_name . '%');
        }

        if (isset($request->level)) {
            $query->where('level', 'like', '%' . $request->level . '%');
        }

        $products = $query->orderBy('created_at', 'desc')->paginate(100);
        return Inertia::render('ProductsQc/PQcList',[
            'products' => $products,
            'filters' => [
                'sku_code' => $request->sku_code,
                'product_name' => $request->product_name,
                'level' => $request->level,
            ],
        ]);
        
    }
}
