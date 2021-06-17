<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SourceController extends Controller
{
    public function checkUrl(Request $request): bool
    {
        return Http::get($request->input('url'))->successful();
    }
}
