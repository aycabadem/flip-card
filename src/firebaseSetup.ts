import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNHFMwWSgFwnc51jrUIFIqetynZOjMAHI",
  authDomain: "flip-card-8dbdc.firebaseapp.com",
  projectId: "flip-card-8dbdc",
  storageBucket: "flip-card-8dbdc.appspot.com",
  messagingSenderId: "477903636986",
  appId: "1:477903636986:web:7929b15f15b422bcb4bc43"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();