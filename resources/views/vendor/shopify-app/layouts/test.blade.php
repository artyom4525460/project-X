<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=0.5, user-scalable=no, target-densityDpi=device-dpi">

        <title>Test</title>

        <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">
        <link rel="stylesheet" href="{{secure_asset('css/custom.css')}}">
        {{-- <script src="https://cdn.WebRTC-Experiment.com/RecordRTC.js"></script>  --}}
        @yield('styles')
    </head>

    <body>
        <div class="app-wrapper">
            <div class="app-content">
                <main role="main">
                    @yield('content')
                </main>
            </div>
        </div>

        @yield('scripts')
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>