<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('store_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->integer('quantity');
            $table->string('image');
            $table->float('price');
            $table->string('sku')->unique()->after('id');
            $table->enum('status', ['Published', 'Draft'])->default('Published');
            $table->enum('stock_status', ['in_stock', 'sold_out', 'on_backorder', 'pre_order'])->default('in_stock');
            $table->longText('description');
            $table->longText('short_description');
            $table->boolean('is_on_sale')->default('0');
            $table->float('sale_price')->nullable();
            $table->integer('minimum_order')->nullable();
            $table->string('is_featured')->default('0');
            $table->string('slug')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
