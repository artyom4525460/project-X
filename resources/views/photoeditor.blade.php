@extends('shopify-app::layouts.test')

@section('content')

    <div id="editor">
    </div>

@endsection

@section('scripts')
    @parent

    <script type="text/javascript">
        var AppBridge = window['app-bridge'];
        var titleBarOptions = {
            title: 'PhotoEditor',
        };

    </script>
    <script src="/js/editor.js"></script>
@endsection