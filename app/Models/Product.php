<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasSlug;

    protected $fillable = [
        'title',
        'description',
        'price',
        'quantity',
        'image',
        'images',
        'category_id',
    ];

    function categories() {
        return $this->belongsToMany(Category::class);
    }

    function user() {
        return $this->belongsTo(User::class);
    }
}
