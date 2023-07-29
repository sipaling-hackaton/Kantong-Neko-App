<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("avatars", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("hat_id")->nullable();
            $table->unsignedBigInteger("ribbon_id")->nullable();
            $table
                ->foreign("hat_id")
                ->references("id")
                ->on("avatar_attrs");
            $table
                ->foreign("ribbon_id")
                ->references("id")
                ->on("avatar_attrs");
            $table->foreignId("account_id")->constrained("accounts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("avatars");
    }
};
