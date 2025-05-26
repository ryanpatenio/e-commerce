<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminAndStaffOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        
        $user = Auth::user();

        // Early return for unauthenticated users
        if (!$user) {
            abort(403, 'Unauthorized.');
        }

        // Explicit role check (adjust roles as needed)
        if (!in_array($user->role, ['admin', 'staff'])) {
            abort(403, 'Insufficient permissions.');
        }

        return $next($request);
    }
}
