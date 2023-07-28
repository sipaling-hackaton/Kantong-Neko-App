<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MerchantPartner extends Model
{
    use HasFactory;

    public function merchantProducts(): HasMany
    {
        return $this->hasMany(MerchantProduct::class);
    }
}
