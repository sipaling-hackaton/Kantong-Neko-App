<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Avatar;
use App\Models\MerchantProduct;
use App\Models\User;
use App\Models\TermsSavings;

class Account extends Model
{
    use HasFactory;

    protected static function boot()
    {
        parent::boot();

        static::created(function ($account) {
            $avatar = new Avatar([
                "hat_id" => null,
                "ribbon_id" => null,
            ]);
            $account->avatar()->save($avatar);
        });
    }

    public function termSavings(): HasMany
    {
        return $this->hasMany(TermsSavings::class);
    }

    public function currentSavings(): HasOne
    {
        return $this->hasOne(TermsSavings::class)->latestOfMany();
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

    public function avatar(): HasOne
    {
        return $this->hasOne(Avatar::class);
    }
}
