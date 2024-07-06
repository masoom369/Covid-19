<?php

use Illuminate\Foundation\Application;
use App\Http\Middleware\UserMiddleware;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\HospitalMiddleware;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'admin'=>AdminMiddleware::class,
            'hospital'=>HospitalMiddleware::class,
            'user'=>UserMiddleware::class
       ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
