<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    use HasSlug;

    protected $fillable = ['name', 'user_id','image', 'description', 'address', 'location','slug'];

    public function users(): HasMany
{
    return $this->hasMany(User::class);
}

    function store_images(): HasMany {
        return $this->hasMany(StoreImage::class);
    }

    protected $casts = [
        'location' => 'json',
    ];

    function products(): HasMany {
        return $this->hasMany(Product::class);
    }

   
}
