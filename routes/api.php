<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\CanderController;
use App\Http\Controllers\HealthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SourceController;
use App\Http\Controllers\PhotoEditorController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\IframeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('checkurl', [SourceController::class, 'checkUrl']);

Route::get('orders/{number}', [OrderController::class, 'show']);

Route::middleware(['auth.proxy', 'billable'])->prefix('proxy')->group(function () {

    Route::get('getSettings', [SettingController::class, 'getSettings']);
    Route::get('getIframe', [IframeController::class, 'getIframe']);

    Route::get('photoeditor/get/{code}', [PhotoEditorController::class, 'get']);

    Route::get('health', HealthController::class);

    Route::prefix('orders')->group(function () {
        Route::get('details', [OrderController::class, 'details']);
    });

    Route::prefix('cander')->group(function () {
        Route::get('cards', [CanderController::class, 'getCards']);
        Route::post('messages', [CanderController::class, 'createMessage']);
    });

    Route::prefix('analytics/events/widget')->group(function () {
        Route::post('impression', [AnalyticsController::class, 'widgetImpressionEvent']);
        Route::post('click', [AnalyticsController::class, 'widgetClickEvent']);
        Route::post('action', [AnalyticsController::class, 'widgetActionEvent']);
    });
});
