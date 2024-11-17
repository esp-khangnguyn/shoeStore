import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQDtc6teGUsd952sA4S99x_o4WQdZ9Qaw",
    authDomain: "shoesstore-3e02e.firebaseapp.com",
    projectId: "shoesstore-3e02e",
    storageBucket: "shoesstore-3e02e.firebasestorage.app",
    messagingSenderId: "801158136797",
    appId: "1:801158136797:web:359177e57de3ba9e39ec34",
    measurementId: "G-S1JKB1E6E5"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };