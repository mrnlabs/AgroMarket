<?php

namespace App\Models;

use App\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasSlug;

    protected $fillable = ['title', 'slug', 'description', 'status', 'user_id', 'order'];
}
