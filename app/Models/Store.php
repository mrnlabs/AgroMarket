<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasSlug;

    protected $fillable = ['name', 'user_id','image', 'description', 'address', 'location','slug'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'location' => 'json',
    ];
}
