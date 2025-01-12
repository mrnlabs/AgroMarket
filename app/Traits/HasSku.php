<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

trait HasSku
{
    public static function bootHasSku()
    {
        static::creating(function (Model $model) {
            if (empty($model->sku)) {
                $model->sku = $model->generateSku();
            }
        });
    }

    public function generateSku(): string
    {
        $prefix = $this->skuPrefix ?? 'PRD';
        $suffix = $this->skuSuffix ?? '';
        
        // Get the last SKU from database
        $lastSku = static::query()
            ->where('sku', 'like', $prefix . '%')
            ->orderBy('id', 'desc')
            ->value('sku');

        if ($lastSku) {
            // Extract the number from the last SKU
            $number = (int) preg_replace('/[^0-9]/', '', $lastSku);
            $number++;
        } else {
            $number = 1;
        }

        // Format number with leading zeros
        $numberLength = $this->skuNumberLength ?? 6;
        $formattedNumber = str_pad($number, $numberLength, '0', STR_PAD_LEFT);

        // Generate new SKU
        return $prefix . $formattedNumber . $suffix;
    }

    // Optional: Add method to regenerate SKU
    // public function regenerateSku(): string
    // {
    //     $this->sku = $this->generateSku();
    //     $this->save();
        
    //     return $this->sku;
    // }
}
