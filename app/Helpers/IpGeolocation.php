<?php

namespace App\Helpers;

use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class IpGeolocation
{
    public static function lookup(?string $ip = null)
{
    $ip = $ip ?? request()->ip();
    
    return cache()->remember("ip_geo_{$ip}", now()->addHours(24), function () use ($ip) {
        try {
            $response = Http::timeout(30)
                ->retry(3, 100)
                ->get('https://api.ipgeolocation.io/ipgeo', [
                    'apiKey' => config('services.ipgeolocation.key'),
                    'ip' => $ip
                ]);

            if ($response->successful()) {
                return $response->json();
            }

            throw new Exception('IP Geolocation API failed: ' . $response->body());
        } catch (Exception $e) {
            Log::error('IP Geolocation error: ' . $e->getMessage());
            return null;
        }
    });
}
}