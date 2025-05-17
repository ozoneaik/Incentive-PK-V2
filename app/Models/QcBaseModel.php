<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class QcBaseModel extends Model
{
    protected $connection = 'pgsql_port_30';
    protected $table = 'qc_log_data';
    protected $primaryKey = 'id';


    public function getQcLogData($startDate, $endDate)
    {
        return DB::connection('pgsql_port_30')
            ->table('qc_log_data as ld') // ← เพิ่ม alias ตรงนี้
            ->select(
                'ld.id',
                'ld.datekey',
                DB::raw('MONTH(ld.datekey) as KMonth'),
                'ld.empkey',
                'ld.empqc',
                'qu.emp_name',
                'ld.skucode',
                'p.pname',
                'p.timeperpcs',
                'lv.levelname'
            )
            ->leftJoin('qc_prod as p', 'ld.skucode', '=', 'p.pid')
            ->leftJoin('qc_level as lv', 'p.levelid', '=', 'lv.levelid')
            ->leftJoin('qc_user as qu', 'ld.empqc', '=', 'qu.emp_no')
            ->whereBetween('ld.datekey', [$startDate, $endDate])
            ->get();
    }

    public function getCountQcLogOfYearMonth($year)
    {
        $startDate = $year . '-01-01';
        $endDate = $year . '-12-31';
        $count = DB::connection('pgsql_port_30')
            ->table('qc_log_data as ld') // ← เพิ่ม alias ตรงนี้
            ->select(
                DB::raw('MONTH(datekey) as kMonth'),
                DB::raw('COUNT(datekey) as k_month_count')
            )
            ->leftJoin('qc_prod as p', 'ld.skucode', '=', 'p.pid')
            ->leftJoin('qc_level as lv', 'p.levelid', '=', 'lv.levelid')
            ->leftJoin('qc_user as qu', 'ld.empqc', '=', 'qu.emp_no')
            ->whereBetween('ld.datekey', [$startDate, $endDate])
            ->groupBy('kMonth')->get();
        return  $count;
    }
}
