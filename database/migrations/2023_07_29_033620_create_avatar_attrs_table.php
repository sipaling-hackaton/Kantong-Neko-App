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
        Schema::create("avatar_attrs", function (Blueprint $table) {
            $table->id();
            $table->enum("type", Enum::AVATAR_ATTRIBUTE_TYPE);
            $table->string("asset_url");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("avatar_attrs");
    }
};
