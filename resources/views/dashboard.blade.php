@extends('shopify-app::layouts.default')

@section('content')

<div class="max-w-7x1 mx-auto py-6 sm:px-6 lg:px-8">
    <div id="wrapper" class="container px-4 py-4 mx-auto">
        @if ($user == null || !$user->shop_id)
            @include('partials.activate-modal')
        @endif
        {{-- <img class="mx-auto h-12 w-auto" src="" alt="Workflow"> --}}
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Welcome to Cander!
        </h2>
        <div class="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Billing Information {{ date('F Y') }}
              </h3>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Total Greetings
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ $stats["greetings"] }}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Total Amount
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${{ $stats["amount"] }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
    </div>
</div>

@endsection

@section('scripts')
    @parent

    <script type="text/javascript">
        var AppBridge = window['app-bridge'];
        var actions = AppBridge.actions;
        var TitleBar = actions.TitleBar;
        var Button = actions.Button;
        var Redirect = actions.Redirect;
        var titleBarOptions = {
            title: 'Dashboard',
        };
        var myTitleBar = TitleBar.create(app, titleBarOptions);

    </script>
@endsection
