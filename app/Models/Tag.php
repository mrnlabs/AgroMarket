<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasSlug;
    
    protected $fillable = [
        'user_id',
        'name',
        'slug'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
