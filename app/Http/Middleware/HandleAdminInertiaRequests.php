<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleAdminInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'admin';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),

            'auth' => [
                'user' => $request->user(), // Default guard (no custom guard needed)
                'isAdmin' => fn () => $request->user()?->role === 'admin',
                'isStaff' => fn () => $request->user()?->role === 'staff',
            ],
            
            // Admin Menu Structure (static data)
            'adminMenu' => [
                ['label' => 'Dashboard', 'href' => '/admin'],
                ['label' => 'Orders', 'href' => '/admin/orders'],
                ['label' => 'Reports', 'href' => '/admin/reports'],
            ],
        
            // Dynamic Notifications (lazy-loaded)
            'adminNotifications' => fn () => $request->user()?->unreadNotifications->take(5) ?? [],
            
            // Flash Messages
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'type'    => fn () => $request->session()->get('type'),
            ],
        ];
    }
}
