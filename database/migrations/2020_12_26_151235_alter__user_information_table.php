<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUserInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users_information', function (Blueprint $table) {
            $table->string('first_name')->nullable()->change();
            $table->string('last_name')->nullable()->change();
            $table->string('state')->nullable()->change();
            $table->string('city')->nullable()->change();
            $table->string('street')->nullable()->change();
            $table->string('postal_code')->nullable()->change();
            $table->string('country')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users_information', function (Blueprint $table) {
            $table->string('first_name')->change();
            $table->string('last_name')->change();
            $table->string('state')->change();
            $table->string('city')->change();
            $table->string('street')->change();
            $table->string('postal_code')->change();
            $table->string('country')->change();
        });
    }
}
