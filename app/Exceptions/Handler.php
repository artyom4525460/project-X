<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        /** @extends */
        \Osiset\ShopifyApp\Exceptions\MissingShopDomainException::class
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        /** @extends */
        $this->reportable(function (Throwable $e) {
            if ($this->shouldReport($e) && app()->bound('sentry')) {
                app('sentry')->captureException($e);
            }
        });

        /** @extends */
        $this->reportable(function (\Illuminate\Http\Client\RequestException $e) {
            $request = request();
            $message = [
                'RequestException',
                $request->method(),
                $request->path(),
                $e->getMessage()
            ];
            logger()->error(implode(' ', $message), $request->toArray());
        });

        /** @extends */
        $this->renderable(function (\Osiset\ShopifyApp\Exceptions\MissingShopDomainException $e) {
            return response()->json(['message' => 'You are not authorized to perform this action.'], 403);
        });
    }
}
