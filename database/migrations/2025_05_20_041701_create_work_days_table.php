<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('work_days', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('year')->comment('ปี');
            $table->tinyInteger('month')->comment('เดือน');
            $table->tinyInteger('work_day')->comment('วันทำงาน');
            $table->string('created_by')->comment('ผู้สร้าง');
            $table->string('updated_by')->comment('ผู็อัพเดท');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_days');
    }
};
