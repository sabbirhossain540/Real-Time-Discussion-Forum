<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Single Page Forum</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body class="antilaliased font-sans bg-gray-200">

<div id="app">
    <v-app>
        <app-home></app-home>
    </v-app>
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>