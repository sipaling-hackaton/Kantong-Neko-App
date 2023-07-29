<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AvatarAttr extends Model
{
    use HasFactory;

    protected $fillable = ["type", "asset_url"];

    public function avatars(): BelongsToMany
    {
        return $this->belongsToMany(Avatar::class);
    }
}
