<nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center h-24 md:h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="sm:block sm:ml-3">
                    <div class="flex flex-wrap justify-center md:justify-start">
                        <a href="/"
                            class=" @if(Request::path() == '/') bg-gray-900 @endif px-3 py-2 rounded-md text-sm font-medium leading-5 text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            Dashboard
                        </a>
                        <a href="/orders"
                            class=" @if(Request::path() == 'orders') bg-gray-900 @endif ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            Orders
                        </a>
                        <a href="/settings"
                            class=" @if(Request::path() == 'settings') bg-gray-900 @endif ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            Settings
                        </a>
                        <a href="/plans"
                           class=" @if(Request::path() == 'plans') bg-gray-900 @endif ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            Plans
                        </a>
                        <a href="/qrcode"
                            class=" @if(Request::path() == 'qrcode') bg-gray-900 @endif ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            QR Code
                        </a>
{{--                        <a href="/plans"--}}
{{--                           class=" @if(Request::path() == 'plans') bg-gray-900 @endif ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">--}}
{{--                            Plans--}}
{{--                        </a>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </nav>
