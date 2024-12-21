<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class IpGeolocation extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'ipgeolocation';
    }
}