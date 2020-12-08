<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesignersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('designers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner_id');
            $table->foreign('owner_id')->references('id')->on('users');
            $table->string('idea_name');
            $table->string('category');
            $table->string('type');
            $table->decimal('total_cost', 10, 2);
            $table->string('stock_type');
            $table->string('public_file');
            $table->string('private_file');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('designers');
    }
}
