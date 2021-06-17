@extends('shopify-app::layouts.default')

@section('content')

<div class="flex pt-4 px-4 pb-20 content-center">

    <div class="inline-block overflow-hidden transform transition-all flex content-center flex-col mt-4">
        @if($qrCode != null)
            <div class="block pb-8">
                <h2 class="font-bold font-base py-4">This is your store’s QR code.</h2>
                <p class="font-sm py-2">
                    Print this code and include with the orders that have the tag ‘Cander’ in your Shopify or Shipstation order fulfillment. You will use the same QR code slip with every order.
                </p>
            </div>
            <div class="overflow-hidden my-8">
                <div class="qrcode-section bg-white" id="printBlock">
                    <div class="qrcode-section__header px-4 pt-2 pb-12 relative">
                        <div class="qrcode-section__header__first flex">
                            <div class="qrcode-section__header__image w-32">
                                <img src="data:image/png;base64,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" alt="">
                            </div>
                            <div class="qrcode-section__header__text text-center pl-4">
                                <p class="text-5xl text-white font-bold leading-none">
                                    Surprise!
                                </p>
                                <p class="texs-xs text-white">
                                    You received a gift message.
                                </p>
                            </div>
                        </div>
                        <div class="qrcode-section__header__second flex text-2xl absolute w-full left-0 text-center justify-center font-black">
                            Scan this code <img class="px-2" src="data:image/png;base64,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"> to see it
                        </div>
                    </div>
                    <div class="qrcode-section__body pt-6">
                        <img id="QRCodeImage" src="data:image/jpeg;base64, {{$qrCode}}"/>
                    </div>
                    <div class="qrcode-section__footer absolute left-0 bottom-0 py-2">
                        <p class="text-white">
                            To scan a QR code, open your phone’s camera, point at the code and tap the link that pops up. 
                        </p>
                    </div>
                </div>
                <div class="px-6 py-10" id="qrPopupButtonBlock">
                    <a class="qr-codes-link w-32 inline-flex justify-center rounded-md px-4 py-2 text-base leading-6 font-medium text-white shadow-sm bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="#" id="printQRCode">Print</a>
                </div>
            </div>
        @else
            <h2>No QR code for this store!</h2>
        @endif
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
            title: 'QR code',
        };
        var myTitleBar = TitleBar.create(app, titleBarOptions);

        var printQRCode = document.getElementById('printQRCode')
        var downloadQRCode = document.getElementById('downloadQRCode')
        var QRCodeImage = document.getElementById('QRCodeImage')
        printQRCode.addEventListener('click', async (e) => {
          e.preventDefault()
          //await printImg(QRCodeImage.src)
          printDiv()
        })

        function printImg(html) {
            var newWin = window.open("about:blank", "Print QR-code", "width=500,height=500");
            setTimeout(()=>{
              newWin.document.write(html);
              setTimeout(() => {
                newWin.print()
                newWin.close()
              }, 500)
            }, 500)
            return true
        }

        function printDiv() {
            let headstr = "<html><head><title></title></head><body style='width: 330px; height: 376px;'>"
            let footstr = "</body>"
            let body = `
                <div class="qrcode-section bg-white" id="printBlock">
                    <div class="qrcode-section__header px-4 pt-2 pb-12 relative">
                        <div class="qrcode-section__header__first flex">
                            <div class="qrcode-section__header__image w-32">
                                <img src="data:image/png;base64,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" alt="">
                            </div>
                            <div class="qrcode-section__header__text text-center pl-4">
                                <p class="text-5xl text-white font-bold leading-none">
                                    Surprise!
                                </p>
                                <p class="texs-xs text-white">
                                    You received a gift message.
                                </p>
                            </div>
                        </div>
                        <div class="qrcode-section__header__second flex text-2xl absolute w-full left-0 text-center justify-center font-black">
                            Scan this code <img class="px-2" src="data:image/png;base64,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"> to see it
                        </div>
                    </div>
                    <div class="qrcode-section__body pt-6">
                        <img id="QRCodeImage" src="${QRCodeImage.src}"/>
                    </div>
                    <div class="qrcode-section__footer absolute left-0 bottom-0 py-2">
                        <p class="text-white">
                            To scan a QR code, open your phone’s camera, point at the code and tap the link that pops up. 
                        </p>
                    </div>
                </div>
            `
            //let newstr = document.all.item(printpage).innerHTML;
            let oldstr = document.body.innerHTML;
            document.body.innerHTML = headstr + body + footstr;
            window.print()
            window.close()
            document.body.innerHTML = oldstr;
            return false;
        }

    </script>
@endsection
