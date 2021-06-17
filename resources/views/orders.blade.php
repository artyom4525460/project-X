@extends('shopify-app::layouts.default')

@section('content')
<div class="py-4 flex">
  <div class="px-4 flex items-center">Filtered by month:</div>
  <div class="px-4 flex items-center justify-center" id="monthFilterBlock">
    <input class="border px-2 py-1 w-52" type="month" id="monthFilterField" name="monthFilterField"
    min="2020-10">
  </div>
  <div class="px-4 flex items-center justify-center" id="monthFilterBlockMozilla" style="display: none">
    <label for="monthFilterSelect">Month:</label>
      <select id="monthFilterSelect" class="border px-2 py-1 mx-2" name="monthFilterSelect">
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <label for="yearFilterSelect">Year:</label>
      <select id="yearFilterSelect" class="border px-2 py-1 mx-2" name="yearFilterSelect">
      </select>
  </div>
  <button
    x-data="{ progress: false}"
    type="button"
    id="applyOrdersFilter"
    class="inline-flex justify-center rounded-md px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
    @click="progress = true"
    >
    <span x-show="progress" class="pr-2"> @include('partials.spinner') </span>Apply
  </button>
</div>
@if($orders)
  <div class="flex flex-col cander-admin-orders">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Order #
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">QR-code</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Notified At
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              @foreach ($orders as $order)
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <div class="text-sm leading-5 text-gray-900">{{ $order["orderNumber"] }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">
                          {{ $order["customer"] }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ $order["email"] }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <div class="text-sm leading-5 text-gray-900">{{ $order["title"] }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      @if ($order["status"] == 'paid' && $order["notifiedAt"])
                        bg-green-100 text-green-800
                      @elseif ($order["status"] == 'paid')
                        bg-yellow-100 text-yellow-800
                      @endif
                      "
                      >
                      {{ $order["status"] }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {{ date('Y-m-d H:i', strtotime($order["createdAt"])) }}
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    <button
                        type="button"
                        class="qr-codes-link inline-flex justify-center rounded-md px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        data-id="{{ $order["shopId"] }}"
                        >
                        <span class="pr-2 loader cander-hide"> @include('partials.spinner') </span>Get QR-code
                    </button>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    {{ $order["notifiedAt"] ? date('Y-m-d H:i', strtotime($order["notifiedAt"])) : null }}
                  </td>
                </tr>
              @endforeach

              <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="cander-admin-popup-shadow cander-hide" id="qrPopup">
    <div class="cander-admin-popup absolute bg-white shadow overflow-hidden sm:rounded-lg" id="qrPopupWindow">
      <div class="border-t border-gray-200">
        {{-- <img id="QRCodeImage" src="data:image/jpeg;base64, iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQAAAACFI5MzAAABaElEQVR42u2XQY7EMAgEkfiWJX8diW8hebqxV0omuzfYU3IZ4TokQNNmZP31yEte8pIuYiK63H2Fxsygh/jieYyhphl0EdMdx5C5gzZiaue4l8RcHiKjlRAOdM1/q3UdoSj853lop47wCZlINvQ5C3XERE3QNxvQ+xhjNpHdMWfnIJJl2kQy4DmOIfrLF9SSoFGE2kTOEKSvJoKpgizsVFRmF0lhQO+noqFdxJle5Lspx9lE2C2kChfHz5jXWpcSHKCeAPM4RhNBKSEOGF5grjSGNhFjv1beTBys22yXknz5UbzdKlpKUiDUIa+LuFW0lCCkQo4z3SpaSpwg08wL4+pVtYRpqh/b2wbbQij5lRXlF0xvIud2ojPBja6bQy1Jf2X3YBUQyW0WKolvMZ4t1aSNcJ+j+XG1+6p1PclbA54kN4VUE6RqFDwW1jG7SG742wLjaxYqyVbIbhuU/9BOFXn/a77kJf9GPtO6RNrNSOkkAAAAAElFTkSuQmCC"/> --}}
        <div class="qrcode-section bg-white">
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
              <img id="QRCodeImage" src=""/>
          </div>
          <div class="qrcode-section__footer absolute left-0 bottom-0 py-2">
              <p class="text-white">
                  To scan a QR code, open your phone’s camera, point at the code and tap the link that pops up. 
              </p>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 px-6 py-4" id="qrPopupButtonBlock">
        <a class="px-2" href="#" id="printQRCode">Print</a>
        <a class="px-2" id="downloadQRCode" download="Greeting-QR-code.png" href="">Download</a>
      </div>
    </div>
  </div>
  <style>
    .cander-admin-orders{
      padding-bottom: 5rem;
    }
    .cander-hide{
      display: none;
    }
    .cander-admin-popup-shadow{
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
    }
    .cander-admin-popup{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
@else
  <div class="py-4 px-4">
    <h2 class="text-sm text-gray-800">There are no orders.</h2>
  </div>
@endif
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
            title: 'Orders',
        };

        init()
        initFilter()

        function init() {
          var myTitleBar = TitleBar.create(app, titleBarOptions);
          var qrPopup = document.getElementById('qrPopup')
          var QRCodeImage = document.getElementById('QRCodeImage')
          var printQRCode = document.getElementById('printQRCode')
          var downloadQRCode = document.getElementById('downloadQRCode')
          var qrCodesLinks = document.getElementsByClassName('qr-codes-link')
          var qrPopupButtonBlock = document.getElementById('qrPopupButtonBlock')
          var qrImageCode

          for(let item of qrCodesLinks){
          item.addEventListener('click', (e) => {
            e.preventDefault()
            let loader = item.getElementsByClassName('loader')
            loader[0].classList.remove('cander-hide')
            axios.get('me/qrcode')
            .then((response) => {
              qrPopup.classList.remove('cander-hide')
              loader[0].classList.add('cander-hide')
              if(response.data && response.data != ""){
                QRCodeImage.src = `data:image/png;base64, ${response.data}`
                downloadQRCode.href = `data:image/png;base64, ${response.data}`
                qrImageCode = response.data
              }
              else{
                  alert("This order don't have QR-code")
              }
            })
            .catch((e) => {
                console.log(e);
                loader[0].classList.add('cander-hide')
                alert('Request error. Please try again later')
              })
            })
          }
          if(qrPopup){
            qrPopup.addEventListener('click', (e) => {
              if(e.target == qrPopupButtonBlock || e.target == QRCodeImage || e.target == qrCodesLinks || e.target == downloadQRCode) {
                return
              }
              else{
                qrPopup.classList.add('cander-hide')
              }

            })
          }
          if(printQRCode){
            printQRCode.addEventListener('click', async (e) => {
              e.preventDefault()
              // await printImg(`data:image/png;base64, ${qrImageCode}`)
              printDiv()
            })
          }

        }

        function printImg(url) {
            var newWin = window.open("about:blank", "Print QR-code", "width=400,height=300");
            setTimeout(()=>{
              newWin.document.write(`<img src="${url}"/ id="image">`);
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
                <div class="qrcode-section bg-white">
                    <div class="qrcode-section__header px-4 pt-2 pb-12 relative">
                        <div class="qrcode-section__header__first flex">
                            <div class="qrcode-section__header__image w-32">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAxCAYAAACGYsqsAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAACUNJREFUeJzNmHtQVNcdx0lpaupkOm3tZGraaf/qdDptYtO0M5mm04eZYkx8a4AoKgK+8IFvBF+oVETBlJcvECEarSwvgeUhsIu7gC9ggX2wPNxlAcU48tpFR4zy6/fcvZiNLniPuuCZ+Qx37z3n3PO5v3N+517c3CSU1N5vJqb2PTwMdOAe6AIlOL8mpefB+JHa6vps4w22ft8GW78C9AAbaDZY+8P11v7fSrn/qBZIfQgp+YnOvofHzV/TkaZ2Otp8gxLb71Dy7btWXI9L7XnwprO2eqvtpwar7XhVV093SUcnZbZYKKO5lfLMHXTpdtdAfa+1FHX+MNpOwxbITDjZdf/S0ZabFFulo5hrWgs4BnLAozhNA8S7BhHtmJTuAfcn2yOKUSUdt+hYbQNrOwAyQQq4nlCtF+R1fdZGbZ/N6QMb9ZLSfX/Fkca2RxggG3AE+NnQNRy/C+rZg4B0Nx7Oe45tdVbbLyB7V2xrAu84tH0DnIu9pn2Q1mSGtC1oNL2GLUnt3TViZDvBUxHEub+AwTiNkZI6elY6Xqvr7Qs9qjGwtvfBv520/Tm4xB5IgeVGgSs9JJfDelO/GKELzq7j/PeAmdXBuk5O/rr/NXZe22cdl2duLxHbtoBfDtP+S1YnRdtU60oPySW2Wt8pDvrKcHVwLZfVOaw3lyO5/Yidq+3pfTtF19QotlWBcU7auYMsVieuSnfJlR6Sy0HVlZiYq/Vs0IPgIxbRJ+vg3FZh0Bpje9LN3insXI6p/QNM53uicLCzvnE+EHSxOocqqg+62kVS2Ztf/EFU+bXb4sB1YAN4H0wcksffTzETCFvWADJ1FTJ29pfdAxWJ5luD7Dxb52I9d7EdW/cBoAMPc/Dgxct398qL/zq2pmIJOZvmvitbHra/VD0oSrO/VmAE+Sx64J+HG8x04mYfHTN1ityiE7ds2LPbWAQngSBQABrF9qwv2q8oH9iRnh20O6/wtbF2fVxC/if7YchZ2ezduYWtESWqR9EVVSRO88fE1TZSbLXhO+cY8fVNT507VFlDkcoKCjufX7/tXIZ/6Ln0p7L/qJW28rIfg9+BdwRUineHaLmoeE+WL/ePz8zKi87ItEZlZhPjoCyDItKzaF/BBYFIECEeR4jX7XWzKDojqzchKzv7TF7e6laVYpJj/4/vab//BOC6qKPzt0Ao0IBb4I5IlzNMauXdJpWSGFp5DqmKL1CR9Z7AZds9KhGPy9Rq0uXnkr2ugsxqZf9wfTrck92/DuwEv3KF7DgQDr4BxEtzfg5dKS0hxf2HApqBh6QSjysrK6i5IJe7T5EBkA5e7pS3lBRsv/5V0r2m+P3UFB/BjSZyB8kTD9OZ1psCJZ13SGbpFI6zz5yi2gM7n6vfpoT91HIynizKohUvVboxalelfrM/6dYvIv0GX8no1i0i7erPqWLpXDq9a+vjpJRhNNGRGnsCOxkVQZW4zuo9D7p1C6nx0O7c66cT335RT+SJCW1q5Z/d0Omdhq3LyJJ4iNqS/ysZy7EoMuBBuVJYlDbqNwe80Cdkm6r0H5gl5cDmhk7vN4ato47TR7kxblspWbguPJjqvggfnt2bhHqG0EAynU6ixuiwIekO8CdeSUtZ8euIqkdbubJAyAlImq1FucSEHzSGBVF7agI3xlDpwi/ATfC+ZFFl8bg2tWIyRKuHRM3n08j4ny1Cf3bhnWup7UQMNw0hK14Z4baLpW9hjc6DZCGbuhblBTKlnyZj5DbSbVxCuiAfB+Eda4Q1zEtDyPIxF7Yoitwh+3vIyiDax6LaKs9kyQ6JeLGQ+JrjIsgYEfKtsHH7Kmo9eoAbluzGStiiKHwdUxcRVaoh+YhNXVP6KfvUXTOftOt9SbvWh/Sb/Mm4P/S7ETZuCyRzQgQ3DcFLXS5cs9LLmjRjclK0x4d70zw99gxhyDhzir2VWcpKBs25MsL2SvrgZaTd6Ed1ezZj/99FWmyfT/YnCDcg+Zhiw7lp2BLgcuGryz+j2Kl/p2iPvxFEH6M7myJkXWGNbrBHs27vFtIkRFH9rnWkDVrotD+7MNai6YswbgxjKFy1bY0gqcU6ZVtabUwEhDdD1GfE/uzCWIvXo3ZwMxovHsMJX142T5Crjd5DdftCJfcnCBuwFlsiQ7kxbPKT/uKxypub+lXPEGYSz4ioc2FMzeZ9wdwYsL9JFdYEenNTC+lnCnNiF97sR017N3Jj2OgrSbgeN6pe6cUNk3aNMCLF3qd50W9YLFn46gpPbmpcJcw+94x42+JFv16iMNbiZQyclypE2TXCGDjbi3nR45tYinAdhCsxcF6uuUqYfcwb8JbCix6buzRhbypfOo8bYWq7RDiIvXP6ccPaSRVWBczl5vJyVwmvXSAkIF60aCdFmG0vZRDg5ZKrhLWr5xOT5oV1IFVY4T+Hm8pln40oXI9+awO9nkeY/0kNIUVYg4EV+83mphxSIwlrIFvqO5Muoi6+ql4t4aIls7lRLx1euHjxDDHC3sI98hZ8Sools4Rzr4Rwoe8sblQjCDMyvT+mMr9ZQnSFnSBgDhUsnEZKiLMHMWbC7I1JvngmNyxxYdr2psz6KBLCqyHpSCK4zcTTvaaQGrIacT0z8dwFnwgPa8yEcxfN5EYZIHx4OP0XT4bXFHeZp8ckCB8ABhzT+flThWldvdJTiHCdOL0LF84gNZIge+MbNeHzi2Zwo/AfXthB/PuieDawsYjnzP9EiPKQcO78aXRmrgdeVT1HR7gawlk+07kp8ZvzTGHHku7p8WsIhw9N9QzvKUIW1zhkcCY8wA6u4TUu3WsqFeHJst9sPbCEMBwX/WcLdaQKZyyYzg3bmjCWG1KFBWmvKW9A9l/gK3BDhvXN1rMK462CoxvCbmOCbM6XY81cWWZf6Cy9swojwepI/XjIQMTSMLWkkr5gmpC0MD5zTaDXH6UKfyvu4Q7h38jsyY1kQsQ/Jjdkt8q6Z+xdLzqlWT0mzd64eGDtEJkcuc+0ibzCjiXNvsZTwR32YymyW++FxdOFzZyXrM+nUkzQCtqReV4gWVVB4Tly4fhgyCbKxvXn6ZeNB1NxEOOb8yKyzuzHgxBgfXJjl0LyrMm028+Hgo4nCsTnySk4JVU43r5qOaXg+vP0C3rEvfYHL1VYlH4TrAFaMDjGwuz+DWA9+MnLdv0/s1hnakJ73e0AAAAASUVORK5CYII=" alt="">
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
            let oldstr = document.body.innerHTML;
            document.body.innerHTML = headstr + body + footstr;
            window.print()
            window.close()
            document.body.innerHTML = oldstr;
            init()
            initFilter()
            return false;
        }

        function initFilter() {
          var yearSelect = document.getElementById('yearFilterSelect')
          var monthSelect = document.getElementById('monthFilterSelect')
          var year = (new Date()).getFullYear()
          for(var i = 0; i <= 5; i++) {
            var option = document.createElement('option')
            option.setAttribute('value', year-i)
            option.textContent = year-i
            yearSelect.appendChild(option)
          }

          if(document.getElementById('monthFilterField').type == 'text'){
            document.getElementById('monthFilterBlock').style.display = 'none'
            document.getElementById('monthFilterBlockMozilla').style.display = 'flex'
          }

          var datetimeUrl = new URL(window.location.href)
          var datetime = datetimeUrl.searchParams.get("period")
          if(datetime){
            document.getElementById('monthFilterField').value = datetime
            let datetimeArray = datetime.split('-')
            monthSelect.value = datetimeArray[1]
            yearSelect.value = datetimeArray[0]
          }
          else{
            let now = new Date()
            let month = now.getMonth() + 1
            if (month.toString().length < 2){
              month = '0' + month
            }
            document.getElementById('yearFilterSelect').value = now.getFullYear()
            document.getElementById('monthFilterSelect').value = month
            document.getElementById('monthFilterField').value = `${now.getFullYear()}-${month}`
          }

          document.getElementById('applyOrdersFilter').addEventListener('click', (e) => {
            if(document.getElementById('monthFilterField').type == 'text'){
              window.location = '/orders?period=' + document.getElementById('yearFilterSelect').value + '-' + document.getElementById('monthFilterSelect').value
            }
            else{
              if(document.getElementById('monthFilterField').value == ""){
                alert('Please set the date')
              } else {
                window.location = '/orders?period=' + document.getElementById('monthFilterField').value
              }
            }
          })
        }

    </script>
@endsection
