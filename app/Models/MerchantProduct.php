<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class MerchantProduct extends Model
{
    use HasFactory;

    protected $primaryKey = "id";
    public $incrementing = false;
    protected $keyType = "string";

    public function merchantPartner(): BelongsTo
    {
        return $this->belongsTo(MerchantPartner::class, "merchant_partner_id");
    }

    public function claimedBy(): BelongsToMany
    {
        return $this->belongsToMany(Account::class, "account_product");
    }
}
