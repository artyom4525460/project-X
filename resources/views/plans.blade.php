@extends('shopify-app::layouts.default')

@section('content')
<div class="flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
    <div class="w-full px-0 lg:px-4 cander-plans">
        <h2 class="mb-6 px-4 text-6xl font-extrabold text-left">
            Pricing Tiers
        </h2>
        <div class="flex flex-wrap items-center justify-center py-4 pt-0">
            @foreach ($plans as $plan)
                <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                    <div class="flex flex-col rounded-lg shadow-lg group relative">
                        <div class="w-full px-4 py-6 rounded-t-lg flex items-center" style="height: 7.5rem; background-color: {{$plan->colorBackground}}; color: {{$plan->colorText}};">
  
                            @if($plan->name == 'Free')
                                <h3 class="text-3xl mx-auto text-base font-semibold text-center font-bold">
                                    {{ $plan->name }} 30 Day Trial*
                                </h3>
                            @else
                                <h3 class="text-3xl mx-auto text-base font-semibold text-center font-bold">
                                    {{ $plan->name }}
                                </h3>
                            @endif
                        </div>
                        <div class="w-full pb-4 pt-8 py-6 rounded-t-lg card-section-1 h-32">
                            <p class="text-center text-base opacity-70">
                                Monthly Price
                            </p>
                            <p class="text-5xl font-black text-center">
                                ${{ $plan->pricePerMonth }}
                            </p>
                        </div>
                        <div class="w-full px-4 py-6 rounded-t-lg card-section-1 flex flex-col item-center h-32">
                            <p class="text-base text-center opacity-70">
                                Number of Messages
                            </p>
                            <div class="h-24 flex items-center justify-center">
                                @if($plan->name == 'Free')
                                    <p class="text-xl font-bold text-center">
                                        Unlimited <br>free messages
                                    </p>
                                @else
                                    <p class="text-3xl font-bold text-center leading-9">
                                        {{ $plan->terms }}
                                    </p>
                                @endif
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full h-20 py-6 rounded-b-lg">
                            @if($currentPlan->id==$plan->id)
                                <button class="w-5/6 py-2 mt-2 font-semibold text-center border border-transparent rounded" style="background-color: {{$plan->colorBackground}}; color: {{$plan->colorText}};">
                                    Current Plan
                                </button>
                            @else
                                <a href="{{ route('billing', ['plan' => $plan->id]) }}" class="w-5/6 py-2 mt-2 font-semibold text-center border border-transparent rounded cursor-pointer hover:shadow-2x" style="background-color: {{$plan->colorBackground}}; color: {{$plan->colorText}};">
                                    Get Started
                                </a>
                            @endif
                        </div>
                        <div class="w-full py-6 rounded-t-lg card-section-1 h-48">
                            <p class="text-xs text-center opacity-70">
                                Additional Inclusions
                            </p>
                            <ul class="pt-4">
                                @foreach ($plan->additionalInclusions as $item)
                                    <li class="text-sm text-center font-bold">- {{ $item }}</li>
                                @endforeach
                            </ul>
                            @if($plan->name == 'Free')
                                <p class="text-sm text-center opacity-70">
                                    * $2 per message after the end
                                </p>
                            @endif
                        </div>
                    </div>
                </div>
            @endforeach

            @if (!$plans->contains('name', 'Enterprise'))
                <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
                    <div
                        class="flex flex-col rounded-lg shadow-lg group relative"
                    >
                        <div class="w-full px-4 py-6 rounded-t-lg flex items-center" style="height: 7.5rem; background-color: #13455E; color: #ffffff;">
                            <h3 class="text-3xl mx-auto text-base font-semibold text-center font-bold">
                                Enterprise
                            </h3>
                        </div>
                        <div class="w-full pb-4 pt-8 py-6 rounded-t-lg card-section-1 h-32">
                            <p class="text-center text-base opacity-70">
                                Monthly Price
                            </p>
                            <p class="text-3xl font-black text-center pt-4">
                                Custom Pricing
                            </p>
                        </div>
                        <div class="w-full px-4 py-6 rounded-t-lg card-section-1 h-32 flex flex-col item-center h-32">
                            <p class="text-base text-center opacity-70">
                                Number of Messages
                            </p>
                            <div class="h-24 flex items-center justify-center">
                                <p class="text-3xl font-bold text-center leading-9">
                                    Custom
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full h-20 py-6 rounded-b-lg">
                            <a target="_parent" href="mailto:jpf@cander.com" class="w-5/6 py-2 mt-2 font-semibold text-center border border-transparent rounded cursor-pointer hover:shadow-2x" style="background-color: {{$plan->colorBackground}}; color: {{$plan->colorText}};">
                                Contact Us
                            </a>
                        </div>
                        <div class="w-full px-4 py-6 rounded-t-lg card-section-1 h-48">
                            <p class="text-xs text-center opacity-70">
                                Additional Inclusions
                            </p>
                            <ul class="pt-4">
                                <li class="text-sm text-center font-bold">All Pro Features<br>and More</li>
                            </ul>
                        </div>
                    </div>
                </div>
            @endif
        </div>
        <div class="py-6 flex items-center justify-center">
            <p class="text-base text-center opacity-70">
                Any messages over the allocated messages per month, will be charged at $1 per message. <br>Tier level can be changed at any point by store and can be flexed throughout the year.
            </p>
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
            title: 'Settings',
        };
        var myTitleBar = TitleBar.create(app, titleBarOptions);
    </script>
@endsection
