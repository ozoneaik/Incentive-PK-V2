<?php

namespace App\Http\Controllers;

use App\Models\QcProductModel;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductQcController extends Controller
{
    public function index(Request $request){
        $query = new QcProductModel();
        $products = $query->listProduct($request);
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
