<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Category extends Model
{
    use HasSlug;

    protected static function boot()
    {
        parent::boot();

        static::saved(function () {
            Cache::forget('global_categories');
        });

        static::created(function () {
            Cache::forget('global_categories');
        });

        static::updated(function () {
            Cache::forget('global_categories');
        });

        static::deleted(function () {
            Cache::forget('global_categories');
        });
    }

    protected $fillable = [
        'name',
        'slug',
        'image'
    ];

    public function products() {
        return $this->belongsToMany(Product::class);
    }
}
