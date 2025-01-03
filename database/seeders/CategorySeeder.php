<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Technology',
            'Vegetables',
            'Fruits',
            'Electronics',
            'Livestock',
        ];

        foreach ($categories as $categoryName) {
            Category::create([
                'name' => $categoryName,
                'image' => 'https://avatars.githubusercontent.com/u/56942052?s=96&v=4',
            ]);
        }
    }
}
