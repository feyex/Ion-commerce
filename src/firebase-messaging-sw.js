
importScripts('./assets/js/firebase-app.js');
importScripts('./assets/js/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '205350071061'
});

const messaging = firebase.messaging();
