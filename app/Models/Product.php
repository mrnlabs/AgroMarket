<?php

namespace App\Models;

use App\Traits\HasSku;
use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Spatie\DeletedModels\Models\Concerns\KeepsDeletedModels;

class Product extends Model
{
    use HasSlug, HasSku, KeepsDeletedModels;

    protected $skuPrefix = 'FUYA';
    protected $skuSuffix = '';
    protected $skuNumberLength = 6;

    protected $fillable = [
        'title',
        'sku',
        'short_description',
        'description',
        'price',
        'quantity',
        'user_id',
        'is_on_sale',
        'sale_price',
        'minimum_order',
        'stock_status',
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
        return $this->belongsToMany(Tag::class)
                    // ->withPivot('user_id')
                    ->withTimestamps();
    }
}
