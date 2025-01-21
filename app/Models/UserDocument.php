<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDocument extends Model
{
    protected $fillable = [
        'store_id',
        'document_id',
        'document_type',
        'document_path',
        'document_name',
    ];
}
