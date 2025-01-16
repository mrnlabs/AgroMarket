<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'manage products']);
        Permission::create(['name' => 'view reports']);
        Permission::create(['name' => 'manage inventory']);
        Permission::create(['name' => 'process orders']);

        // Create roles and assign permissions
        $superAdmin = Role::create(['name' => 'Store SuperAdmin']);
        $superAdmin->givePermissionTo(Permission::all());

        $manager = Role::create(['name' => 'Store Manager']);
        $manager->givePermissionTo([
            'manage products',
            'view reports',
            'manage inventory',
            'process orders'
        ]);

        $staff = Role::create(['name' => 'Store Staff']);
        $staff->givePermissionTo([
            'process orders',
            'view reports'
        ]);
    }
}