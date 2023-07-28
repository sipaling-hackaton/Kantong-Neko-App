<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, "ktp_id");
    }
}
