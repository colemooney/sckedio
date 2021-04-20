<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterDesignIdColumnOnDesignFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('design_files', function (Blueprint $table) {
            $table->dropForeign(['design_id']);
            $table->foreign('design_id')->references('id')->on('designs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('design_files', function (Blueprint $table) {
            $table->dropForeign(['design_id']);
            $table->foreign('design_id')->references('id')->on('designs');
        });
    }
}
