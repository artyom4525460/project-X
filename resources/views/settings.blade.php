@extends('shopify-app::layouts.default')

@section('content')

<div class="flex pt-4 px-4 pb-20">

    <div class="inline-block overflow-hidden transform transition-all sm:align-middle w-full">

      <div x-data="{ progress: false}" class="bg-gray-50 px-4 py-3 sm:px-6">
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox" id="canderActivate"
            @if ($settings && $settings['activated'])
              checked
            @endif ">
            <span class="ml-2">Check to activate widget on the shop</span>
          </label>
        </div>
        <div class="mt-2">
          <h3 class="text-xl my-3">How to show the widget</h3>
          <label class="flex items-center">
            <input type="radio" class="form-radio" name="showWidgetParameter" value="notShow"
              @if ( !$settings || (!$settings['show_on_cart'] && !$settings['show_on_order']) )
                checked
              @endif
            >
            <span class="ml-2">Don’t Show Widget</span>
          </label>
          <label class="flex items-center mt-2">
            <input type="radio" class="form-radio" name="showWidgetParameter" value="showOrder"
              @if ( $settings && (!$settings['show_on_cart'] && $settings['show_on_order']) )
                checked
              @endif
            >
            <span class="ml-2">Show on order confirmation / thank you page</span>
          </label>
          <label class="flex items-center mt-2">
            <input type="radio" class="form-radio" name="showWidgetParameter" value="showCart"
              @if ( $settings && ($settings['show_on_cart'] && !$settings['show_on_order']) )
                checked
              @endif
            >
            <span class="ml-2"> Show on cart page (Want to preview how it looks? Activate the app add a product to the cart and click <a href="//{{$url}}/cart?canderpreview=true" target="_blank" class="text-green-600 hover:text-green-500">preview</a>*)</span>
          </label>
          <label class="flex items-center mt-2">
            <input type="radio" class="form-radio" name="showWidgetParameter" value="showAll"
              @if ( $settings && ($settings['show_on_cart'] && $settings['show_on_order']) )
                checked
              @endif
            >
            <span class="ml-2">Show for order confirmation / thank you page and cart page (Want to preview how it looks? Activate the app, add product to the cart and click <a href="//{{$url}}/cart?canderpreview=true" target="_blank" class="text-green-600 hover:text-green-500">preview</a>*)</span>
          </label>
        </div>
        <div class="py-4 text-left">
            <button @click="progress = true;
                  let canderActivate = document.getElementById('canderActivate').checked
                  let showWidgetParameters = document.getElementsByName('showWidgetParameter')
                  let showWidgetParameter
                  for (var i = 0, length = showWidgetParameters.length; i < length; i++) {
                    if (showWidgetParameters[i].checked) {
                      showWidgetParameter = showWidgetParameters[i].value
                      break;
                    }
                  }
                  axios.post('updateSettings', {
                    'activated': canderActivate,
                    'showing': showWidgetParameter
                  })
                  .then(function(response){
                      progress = false
                      console.log(response)
                      axios.post('analytics/events/widget/installed').then().catch()
                  })
                  .catch(function(error){
                      console.log(error);
                      progress = false;
                  });
              "
              type="button"
              class="max-w-xs	inline-flex justify-center w-32 rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              <span x-show="progress" class="pr-2"> @include('partials.spinner') </span> Save
            </button>
        </div>
      </div>

      <div class="px-4 py-3 sm:px-6 text-left mt-6">
        <h3 class="mb-4 text-lg font-bold">* If the location of widget is not correct you can add this widget to your cart page in a few easy steps:</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3">
          <div class="pr-2">
            <p class="mb-4"><b>STEP 1:</b> Copy the below script:</p>
            <p class="mb-6 mt-2 p-1 bg-white" style="width: fit-content"><span>&lt;div <span class="text-green-700">id</span>=<span class="text-orange-700">"canderContainer"</span>&gt;&lt;/div&gt;</span></p>
            <p class="mb-4"><b>STEP 2:</b> In your Online Store, select “Themes”</p>
            <p class="mb-4"><b>STEP 3:</b> Under the Actions dropdown, select “Edit Code”</p>
            <img src="{{URL::asset('/images/instruction/step3.jpg')}}"/>
          </div>
          <div class="pr-2">
            <p class="mb-4"><b>STEP 4:</b> In the search bar on the left panel, search for: cart-template then click the link</p>
            <img src="{{URL::asset('/images/instruction/step4.jpg')}}"/>
          </div>
          <div>
            <p class="mb-4"><b>STEP 5:</b> Find the right place in code where you want to see the widget:</p>
            <p class="mb-4"><b>STEP 6:</b> Paste the code from Step 1. Once pasted, it should look like this:</p>
            <img src="{{URL::asset('/images/instruction/step6.jpg')}}" class="mb-2"/>
            <p class="mb-4"><b>STEP 7:</b> Click the Save button</p>
            <p class="mb-4"><b>STEP 8:</b> Click the green link "preview" from this page to see the result</p>
            <p class="mb-4"><b>You’re done!</b></p>
          </div>
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
            title: 'Settings',
        };
        var myTitleBar = TitleBar.create(app, titleBarOptions);
    </script>
@endsection
