<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TermsSavings extends Model
{
    use HasFactory;

    protected $cast = [
        "target_amount" => "float",
    ];

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class, "account_id");
    }
}
