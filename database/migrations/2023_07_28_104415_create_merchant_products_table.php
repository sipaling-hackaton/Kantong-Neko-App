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
            $table
                ->uuid("id")
                ->primary()
                ->default(DB::raw("uuid()"));
            $table->string("name");
            $table->text("description");
            $table->string("image");
            $table->integer("stock");
            $table->integer("xp_price");
            $table->date("start_date");
            $table->date("end_date");
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
