<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasSlug;

    protected $fillable = [
        'title',
        'short_description',
        'description',
        'price',
        'quantity',
        'user_id',
        'is_on_sale',
        'sale_price',
        'minimum_order',
        'is_featured',
        'image',
        'images',

    ];

    function categories() {
        return $this->belongsToMany(Category::class);
    }

    function store() {
        return $this->belongsTo(Store::class);
    }

    function product_images() {
        return $this->hasMany(ProductImage::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
