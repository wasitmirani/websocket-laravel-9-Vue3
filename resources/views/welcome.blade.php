<!DOCTYPE html>

<html>

    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel WebSocket Example</title>

    </head>

    <body>
        <div id="app">
            <div id="div-data"></div>
        </div>

        <script src="{{ asset('js/app.js') }}" defer></script>


        <script src='./js/app.js'></script>

        <script>
            window.Echo.channel('events')
            .listen('GetRequestEvent', (e) => {
                console.log(e)
                document.querySelector('#div-data').innerHTML = e.message
            })
        </script>

</script>
