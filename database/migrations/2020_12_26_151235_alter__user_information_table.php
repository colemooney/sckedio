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
            $table->string('city')->nullable()->change();
            $table->string('street')->nullable()->change();
            $table->string('postal_code')->nullable()->change();
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
            $table->string('city')->change();
            $table->string('street')->change();
            $table->string('postal_code')->change();
        });
    }
}
