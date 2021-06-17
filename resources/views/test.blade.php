@extends('shopify-app::layouts.test')

@section('content')

    <div id="canderInitial" onload="loadCander()">
        <img src="{{URL::asset('/images/present-qr-illustration.svg')}}" alt="image"/>
        <p id="canderText">Would you like to create a free QR virtual greeting to be sent with your gift?</p>
        <a href="#" id="canderButton">Yes! Create a card</a>
        <a href="#" id="canderButtonNoThanks">No thanks</a>
        <p id="canderRedText" class="cander-hide">Cander - your best way to make an original greeting!</p>
    </div>
    <div id="canderResult">
    </div>
    <style>
        .cander-source-preloader{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .cander-result-item-source{
            height: 100%;
            width: 50%;
            position: relative;
        }
    </style>
    
@endsection

@section('scripts')
    @parent

    <script type="text/javascript">
        var AppBridge = window['app-bridge'];
        //var TitleBar = actions.TitleBar;
        //var Button = actions.Button;
        //var Redirect = actions.Redirect;
        var titleBarOptions = {
            title: 'Test',
        };
        //var myTitleBar = TitleBar.create(app, titleBarOptions);

    </script>
    <script src="/js/cander-app.js"></script>
@endsection