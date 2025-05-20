<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class QcProductModel extends Model
{
    protected $connection = 'pgsql_port_30';
    protected $table = 'qc_prod';
    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'pid',
        'pname',
        'levelid',
        'timeperpcs',
        'updatedate',
        'updateby',
        'createdate',
        'createby',
    ];

    public function listProduct($request): LengthAwarePaginator
    {
        $query = QcProductModel::query();
        if ($request->sku_code) {
            $query->where('sku_code', 'like', '%' . $request->sku_code . '%');
        }
        if ($request->product_name) {
            $query->where('product_name', 'like', '%' . $request->product_name . '%');
        }
        if ($request->level) {
            $query->where('level', 'like', '%' . $request->level . '%');
        }
        return $query->orderBy('id', 'desc')->paginate(100);
    }

    public function storeProduct($req)
    {
        return QcProductModel::query()->create($req);
    }

    public function updateProduct($req, $id): int
    {
        return QcProductModel::query()->where('id', $id)->update($req);
    }

    public function deleteProduct($id)
    {
        return QcProductModel::query()->where('id', $id)->delete();
    }

}
