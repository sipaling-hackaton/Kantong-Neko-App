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
        Schema::create("account_product", function (Blueprint $table) {
            $table->unsignedBigInteger("account_id");
            $table->uuid("merchant_product_id");
            $table->timestamps();

            $table->primary(["account_id", "merchant_product_id"]);
            $table
                ->foreign("account_id")
                ->references("id")
                ->on("accounts");
            $table
                ->foreign("merchant_product_id")
                ->references("id")
                ->on("merchant_products");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
