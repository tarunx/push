
// Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAYr5xnJrFQRD3w_doJ6LQG0lFk3KGTnco",
    authDomain: "push-d572b.firebaseapp.com",
    projectId: "push-d572b",
    storageBucket: "push-d572b.appspot.com",
    messagingSenderId: "5934231947",
    appId: "1:5934231947:web:7a4b51751c533640853f8e",
    measurementId: "G-D7611EP097"
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/thumb.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });