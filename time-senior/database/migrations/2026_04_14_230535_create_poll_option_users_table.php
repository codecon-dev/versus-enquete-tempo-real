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
        Schema::create('poll_option_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('poll_id')->nullable()->index();
            $table->foreignId('poll_option_id')->nullable()->index();
            $table->foreignId('user_id')->nullable()->index();
            $table->timestamps();

            $table->unique(['poll_id', 'poll_option_id', 'user_id'], 'poll_option_user_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('poll_option_users');
    }
};
