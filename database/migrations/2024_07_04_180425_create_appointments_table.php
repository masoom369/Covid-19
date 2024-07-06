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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeonDelete()->cascadeOnUpdate();
            $table->string('username');
            $table->enum('gender', ['Male', 'Female', 'Other']); 
            $table->string('nic');
            $table->string('hospitalname');
            $table->enum('appointment_type', ['covid19-test', 'vaccination', 'vaccination and covid19-test']);
            $table->string('vaccinename');
            $table->dateTime('datetime');
            $table->enum('result', ['positive', 'negative', 'pending'])->default('pending');
            $table->enum('vaccination', ['done', 'not done'])->default('not done');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
