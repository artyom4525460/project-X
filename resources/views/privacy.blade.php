@extends('shopify-app::layouts.default')

@section('content')

<div class="pt-4 px-4 pb-20">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-800">Policy Statement</h2>
    <h3 class="mt-3 text-2xl font-extrabold text-gray-800">Thank you for using Cander!</h3>
    <p>At Cander, we recognize that privacy is important and we are committed to protecting it. This privacy policy is applicable to your account information provided and the data created using this service. If you need more detailed information about our privacy practices use our contact form contact us.</p>
    <h4 class="mt-2 text-1xl font-extrabold text-gray-800">Collecting Information</h4>
    <p>Account: To use Cander, each user needs to register their account providing the following details: (1) Name (2) E-mail (3) Password or Login from (1) Google+ (2) Facebook (3) Twitter. We store your password data in encrypted form.</p>
    <p>Cookies: When you click "Remember me" in Login form at any of MockFlow's web services, we store your account information in encrypted form in a small file containing a string of characters - to your computer that uniquely identifies your browser.</p>
    <h4 class="mt-2 text-1xl font-extrabold text-gray-800">Your E-Mail is kept private</h4>
    <p>The only key personal information that we store about you is your E-Mail address which is also your Login ID. We do not sell/disclose/distribute your e-mail address to third-parties under any circumstances.</p>
    <h4 class="mt-2 text-1xl font-extrabold text-gray-800">Information security</h4>
    <p>We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. We restrict access to personal information to our employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.</p>
    <h4 class="mt-2 text-1xl font-extrabold text-gray-800">Data Backup Policy</h4>
    <p>In order to safeguard your data created using Cander, we automate multiple data backups that may contain your account information. All the backups are securely stored using encryption.</p>
    <h4 class="mt-2 text-1xl font-extrabold text-gray-800">Changes to this Privacy Policy</h4>
    <p>We may occasionally update this privacy policy in this page. Most changes will be minor and will be based on the Service features and requirements.</p>


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
            title: 'Privacy',
        };
        var myTitleBar = TitleBar.create(app, titleBarOptions);
    </script>
@endsection
