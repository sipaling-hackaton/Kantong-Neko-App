<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Helpers\Enum;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("accounts", function (Blueprint $table) {
            $table->unsignedBigInteger("id")->primary();
            $table->string("name");
            $table->enum("gender", ENUM::GENDER);
            $table->date("birthdate");
            $table->float("exp");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("accounts");
    }
};
