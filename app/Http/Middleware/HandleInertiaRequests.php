<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    private function getCachedCategories() {
            return Cache::remember('global_categories', now()->addDay(), function () {
                return Category::withCount('products')->get();
            });
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'roles' => $request->user() ? $request->user()->roles->pluck('name') : [],
            ],
           'categories' => $this->getCachedCategories(),


            'dashboard_js_path' => [
                getenv('ASSET_URL') . '/dashboard-assets/config.js',
                getenv('ASSET_URL') . '/dashboard-assets/app.js'
            ],
            'frontend_js_path' => getenv('ASSET_URL') . '/frontend-assets/js/app.jsx',
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
            'filePath' => getenv('FILE_PATH')
        ];
    }
}
