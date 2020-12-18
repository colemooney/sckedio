<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColumnsInTableDesigners extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('designers', function (Blueprint $table) {
            $table->dropColumn(['category', 'type', 'total_cost', 'stock_type', 'public_file', 'private_file']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('designers', function (Blueprint $table) {
            $table->string('category');
            $table->string('type');
            $table->decimal('total_cost', 10, 2);
            $table->string('stock_type');
            $table->string('public_file');
            $table->string('private_file');
        });
    }
}
