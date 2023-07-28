<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MerchantProduct extends Model
{
    use HasFactory;

    public function merchantPartner(): BelongsTo
    {
        return $this->belongsTo(MerchantPartner::class, "merchant_partner_id");
    }

    public function Account(): BelongsTo
    {
        return $this->belongsTo(Account::class, "account_id");
    }
}
