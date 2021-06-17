<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\CanderController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\QrCodeController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\PhotoEditorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::view('preview', 'test');
Route::view('audio', 'audio');

Route::view('photoeditor', 'photoeditor');
Route::post('photoeditor/add/{code}', [PhotoEditorController::class, 'add']);

Route::middleware(['itp', 'auth.shopify', 'billable'])->group(function () {
    // Pages
    Route::get('/', HomeController::class)->name('home');
    Route::get('orders', [OrderController::class, 'index']);
    Route::get('settings', [SettingController::class, 'index']);
    Route::get('plans', [PlanController::class, 'index']);
    Route::get('qrcode', [QrCodeController::class, 'index']);

    // Pages
    Route::view('terms', 'terms');
    Route::view('privacy', 'privacy');

    // Widget api
    Route::post('updateSettings', [SettingController::class, 'updateSettings']);

    // QR code api
    Route::get('messages/{id}/qrcode', [QrCodeController::class, 'getQrCodeByMessage']);
    Route::get('me/qrcode', [QrCodeController::class, 'getQrCodeByShop']);

    // Cander api
    Route::prefix('cander')->group(function () {
        Route::post('stores/register', [CanderController::class, 'register']);
    });

    // Analytics api
    Route::prefix('analytics/events/widget')->group(function () {
        Route::post('installed', [AnalyticsController::class, 'widgetInstalledEvent']);
        Route::post('uninstalled', [AnalyticsController::class, 'widgetUninstalledEvent']);
    });
});
