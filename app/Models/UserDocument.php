<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserDocument extends Model
{
    protected $fillable = [
        'store_id',
        'document_id',
        'document_type',
        'document_path',
        'document_name',
    ];

    function store() : BelongsTo {
        return $this->belongsTo(Store::class, 'id');
    }
}
