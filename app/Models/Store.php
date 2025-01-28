<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Spatie\DeletedModels\Models\Concerns\KeepsDeletedModels;

class Store extends Model
{
    use HasSlug, KeepsDeletedModels, Notifiable;

    protected $fillable = ['name', 'user_id','image', 'description', 'address', 'status','location','slug'];

    public function users(): HasMany
{
    return $this->hasMany(User::class);
}

    function store_images(): HasMany {
        return $this->hasMany(StoreImage::class);
    }
    
    function store_documents(): HasMany {
        return $this->hasMany(UserDocument::class, 'store_id');
    }

    protected $casts = [
        'location' => 'json',
    ];

    function products(): HasMany {
        return $this->hasMany(Product::class);
    }

   
}
