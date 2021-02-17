<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesignsInformationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('designs_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('design_id');
            $table->foreign('design_id')->references('id')->on('designs');
            $table->text('description');
            $table->foreignId('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreignId('idea_type_id')->before('created_at');
            $table->foreign('idea_type_id')->references('id')->on('idea_types');
            $table->decimal('design_cost', 10, 2);
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
        Schema::dropIfExists('designs_informations');
    }
}
