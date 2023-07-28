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
        Schema::create("merchant_products", function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("name");
            $table->string("description");
            $table->string("image");
            $table
                ->foreignId("merchant_partner_id")
                ->constrained("merchant_partners");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("merchant_products");
    }
};
