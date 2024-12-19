<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Roles/Index', [
            'roles' => Role::with('users')->get(),
            'categories' => Category::get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Roles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name',
            'guard_name' => 'sometimes|in:web,api',
        ]);

        $role = Role::create([
            'name' => $validated['name'],
            'guard_name' => $validated['guard_name'] ?? 'web',
        ]);

        return back()->with('success', 'Role created successfully');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Roles/Edit', [
            'role' => $role,
        ]);
    }

    public function update(Request $request, $roleId)
    {
        $role = Role::findOrFail($roleId);
        $validated = $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
        ]);

        $role->update($validated);

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully');
    }

    public function destroy($roleParam)
    {
        $role = Role::findOrFail($roleParam);
        // Prevent deleting roles with users
        if ($role->users()->count() > 0) {
            return back()->with('error', 'Cannot delete role with assigned users');
        }

        $role->delete();

        return back()
            ->with('success', 'Role deleted successfully');
    }

    public function assignRoleToUser(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'role_name' => 'required|exists:roles,name',
        ]);

        $user = User::findOrFail($validated['user_id']);
        $user->assignRole($validated['role_name']);

        return back()->with('success', 'Role assigned successfully');
    }

    public function removeRoleFromUser(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'role_name' => 'required|exists:roles,name',
        ]);

        $user = User::findOrFail($validated['user_id']);
        $user->removeRole($validated['role_name']);

        return back()->with('success', 'Role removed successfully');
    }
}
