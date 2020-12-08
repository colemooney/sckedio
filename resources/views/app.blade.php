<!-- 
This is the default structure of the react app. 
In editing the react js files open resources/js/components.
-->

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <!-- default meta -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

    <!-- Material UI suggested meta -->
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Material UI default font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Material UI font icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <!-- Styles -->
    <!-- default style sheet -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>
<body>
    <!-- <div id="example"></div> -->
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
