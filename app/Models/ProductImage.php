<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
   protected $fillable = [
      'image',
      'product_id'
  ];

  function product() {
    return $this->belongsTo(Product::class);
  }
}
