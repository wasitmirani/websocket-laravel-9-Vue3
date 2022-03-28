window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

 import Echo from 'laravel-echo';

 window.Pusher = require('pusher-js');
 console.log('host',window.location.hostname);

 window.Echo = new Echo({
    // auth:{ headers: { 'Authorization': 'Bearer ' + '' } },
    broadcaster: 'pusher',
    encrypted: false,
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    forceTLS: false,
    enabledTransports: ['ws', 'wss']
});


window.Echo.channel('events').listen('GetRequestEvent',(e)=>{
    console.log(e)
})
