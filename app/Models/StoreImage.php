<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreImage extends Model
{
    protected $fillable = ['image', 'store_id'];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
