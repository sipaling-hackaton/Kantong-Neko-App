<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Account extends Model
{
    use HasFactory;

    public function termSavings(): HasMany
    {
        return $this->hasMany(TermSaving::class);
    }

    public function claimedRewards(): BelongsToMany
    {
        return $this->belongsToMany(
            MerchantProduct::class,
            "account_product"
        )->withTimestamps();
    }
}
