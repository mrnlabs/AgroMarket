<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        $this->call([
            // UserSeeder::class,  // If you haven't created this yet
            // TaskSeeder::class,
        ]);

        // User::factory()->create([
        //     'first_name' => fake()->name(),
        //     'last_name' => fake()->name(),
        //     'email' => fake()->unique()->safeEmail(),
        // ]);
    }
}
