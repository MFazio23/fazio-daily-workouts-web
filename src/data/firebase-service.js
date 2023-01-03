import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAeOn4m_i3o5dNiCXb9s7_9vRCsRS8F1sc",
    authDomain: "fazio-daily-workouts.firebaseapp.com",
    projectId: "fazio-daily-workouts",
    storageBucket: "fazio-daily-workouts.appspot.com",
    messagingSenderId: "509753931319",
    appId: "1:509753931319:web:c8b6dde8f96e5055b971b2",
    measurementId: "G-GSD8E0G3TB"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export {
    app
}