<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\DeletedModels\Models\Concerns\KeepsDeletedModels;

class UserDocument extends Model
{
    use KeepsDeletedModels;
    
    protected $fillable = [
        'store_id',
        'document_id',
        'document_type',
        'document_path',
        'document_name',
        'document_size',
        'verified_at',
    ];

    function store() : BelongsTo {
        return $this->belongsTo(Store::class, 'store_id');
    }
}
