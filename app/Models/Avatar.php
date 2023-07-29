<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Avatar extends Model
{
    use HasFactory;

    protected $fillable = ["hat_id", "ribbon_id", "user_id"];

    public function hat(): HasOne
    {
        return $this->hasOne(AvatarAttr::class, "hat_id");
    }

    public function ribbon(): HasOne
    {
        return $this->hasOne(AvatarAttr::class, "ribbon_id");
    }

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }
}
