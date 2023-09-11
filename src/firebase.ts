// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBbh21p9cymXq0M-mE3vaTg28S8BGG873c',
    authDomain: 'nwitter-reloaded-a09d1.firebaseapp.com',
    projectId: 'nwitter-reloaded-a09d1',
    storageBucket: 'nwitter-reloaded-a09d1.appspot.com',
    messagingSenderId: '95681970091',
    appId: '1:95681970091:web:8e6498a6b5ee398b4cdcee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
