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
        Schema::create("terms_savings", function (Blueprint $table) {
            $table
                ->uuid("id")
                ->primary()
                ->default(DB::raw("uuid()"));
            $table->decimal("target_amount", 12, 2)->comment("in IDR");
            $table->integer("time_period")->comment("in months");
            $table->date("start_date")->default(now());
            $table
                ->date("end_date")
                ->nullable()
                ->default(null);
            $table
                ->boolean("is_active")
                ->default(true)
                ->comment(
                    "is active or not, only one term savings can be active at a time"
                );
            $table->unsignedBigInteger("account_id");
            $table
                ->foreign("account_id")
                ->references("id")
                ->on("accounts");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("terms_savings");
    }
};
