@extends('shopify-app::layouts.test')

@section('content')

    <main role="main" class="container m-2">
        <div class="row">
            <div class="col">
                <button id="btn-record" type="button" class="btn btn-primary">Record</button>
                <span class="ml-3"></span>
                <button id="btn-stop" type="button" class="btn btn-primary" disabled>Stop</button>
                <div style="margin: .25rem">
                    <span id="cander-recording-debug-txt"></span>
                </div>
            </div>
        </div>

        <div class="row">
        </div>

        <div class="row">
            <div class="col">
                <div id="recording-meter"></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>Recordings</h3>
                <div id="recordings-cont">
                </div>
            </div>
        </div>

    </main>

    <style>
        button.btn {
            margin: 0.25rem;
            width: 15rem;
        }

        audio {
            width: 100%;
        }

        #recording-meter {
            height: 10rem;
            margin: 1rem 0;
            width: 4rem;
        }

    </style>
    
@endsection

@section('scripts')
    @parent

    <script src="js/audio.js"></script>
    <script type="text/javascript">
        var AppBridge = window['app-bridge'];
        var titleBarOptions = {
            title: 'Audio',
        };

    </script>
@endsection