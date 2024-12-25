<?php

namespace App\Helpers;

use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class IpGeolocation
{
/**
 * Retrieve geolocation information for a given IP address.
 *
 * This method fetches geolocation data from an external API for the provided
 * IP address or the requester's IP if no IP is provided. The results are
 * cached for 24 hours to improve performance and reduce API calls.
 *
 * @param string|null $ip The IP address to lookup. If null, the requester's IP is used.
 * @return array|null An associative array with geolocation data if successful, null otherwise.
 * @throws Exception If the API request fails.
 */

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