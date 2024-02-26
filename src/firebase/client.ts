import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBncaEqb3mF1x334mShjpqGhKhTk-42ARg',
    authDomain: 'miportfolio-b1410.firebaseapp.com',
    projectId: 'miportfolio-b1410',
    storageBucket: 'miportfolio-b1410.appspot.com',
    messagingSenderId: '800992262738',
    appId: '1:800992262738:web:6d8c2f9a6f8569b11a3d8b',
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
