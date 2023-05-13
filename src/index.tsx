import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, doc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA8zI1nSHEKFX8vVqMa9SpwFYZ9TOvv7pQ",
  authDomain: "portfolio-821b9.firebaseapp.com",
  projectId: "portfolio-821b9",
  storageBucket: "portfolio-821b9.appspot.com",
  messagingSenderId: "64545105083",
  appId: "1:64545105083:web:1fdbd87e2f1ab469e1359e"
};

const firebaseApp = initializeApp(firebaseConfig);
globalThis.firestore = getFirestore(firebaseApp);

addDoc(collection(window.firestore, 'test'), {
  name: 'Wayne',
}).then(docRef => {
  console.log('yo');
}).catch(error => {
  console.log('error');
});

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
}
