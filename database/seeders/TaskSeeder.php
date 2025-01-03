<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        $users = User::all();

        $tasks = [
            // In Progress Tasks
            [
                'title' => 'Implement User Authentication',
                'description' => 'Set up Laravel Breeze and customize login/register flows',
                'status' => 'in_progress',
                'order' => 1,
            ],
            [
                'title' => 'Design Dashboard Layout',
                'description' => 'Create responsive dashboard using Tailwind CSS',
                'status' => 'in_progress',
                'order' => 2,
            ],
            [
                'title' => 'API Integration',
                'description' => 'Integrate third-party payment gateway API',
                'status' => 'in_progress',
                'order' => 3,
            ],
            
            // Pending Tasks
            [
                'title' => 'Database Optimization',
                'description' => 'Optimize database queries and add indexes',
                'status' => 'pending',
                'order' => 1,
            ],
            [
                'title' => 'Email Template Design',
                'description' => 'Design and implement transactional email templates',
                'status' => 'pending',
                'order' => 2,
            ],
            
            // On Hold Tasks
            [
                'title' => 'Security Audit',
                'description' => 'Conduct security audit and implement recommendations',
                'status' => 'on_hold',
                'order' => 1,
            ],
            [
                'title' => 'Performance Testing',
                'description' => 'Run performance tests and optimize bottlenecks',
                'status' => 'on_hold',
                'order' => 2,
            ],
            
            // Done Tasks
            [
                'title' => 'Setup Development Environment',
                'description' => 'Configure Docker development environment',
                'status' => 'done',
                'order' => 1,
            ],
            [
                'title' => 'User Requirements Documentation',
                'description' => 'Document user requirements and specifications',
                'status' => 'done',
                'order' => 2,
            ],
            
            // Cancelled Tasks
            [
                'title' => 'Legacy System Migration',
                'description' => 'Migrate data from legacy system - Project cancelled',
                'status' => 'cancelled',
                'order' => 1,
            ],
        ];

        foreach ($tasks as $task) {
            Task::create([
                ...$task,
                'user_id' => $users->random()->id,
                'created_at' => now()->subDays(rand(1, 30)),
                'updated_at' => now()->subDays(rand(0, 30)),
            ]);
        }
    }
}