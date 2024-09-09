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
        Schema::create('cases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('service_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('lawyer_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('request_id');
            $table->foreign('request_id')->references('id')->on('requests')->constrained()->onDelete('cascade');
            $table->double('amount');
            $table->enum('status',['underprocess','disputed','closed','completed']);
            $table->unique(['lawyer_id', 'request_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cases');
    }
};
