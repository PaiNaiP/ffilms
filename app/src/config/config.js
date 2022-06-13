//Файл для подключения к базе данных firebas
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; //подключение к библиотеке для хранения фото и видео в firebase
import { getFirestore } from "firebase/firestore"; //подключение к библиотеке для хранения данных в бд firestore
import { getAuth } from "firebase/auth";

const firebaseConfig = { //подключение к файлу .env.local который зашифровывает ключи от базы данных, чтобы их не было видно
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  
const app = initializeApp(firebaseConfig); //основное подключение к firebase

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)

export {app, storage, db, auth} //вывод переменных с подключением (будут связывать бд и саму программу)

