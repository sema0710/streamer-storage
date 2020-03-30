import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrjWtv_hniASRYWR8tlzpbJx-nERQ6Vf4",
    authDomain: "streamer-storage.firebaseapp.com",
    databaseURL: "https://streamer-storage.firebaseio.com",
    projectId: "streamer-storage",
    storageBucket: "streamer-storage.appspot.com",
    messagingSenderId: "593773278694",
    appId: "1:593773278694:web:5d1bd2536f365acb611227",
    measurementId: "G-8TLDHNMDMD"
};
    
export const getDatabase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    return database;
}

export const getStorage = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const storage = firebase.storage();
    return storage;
}