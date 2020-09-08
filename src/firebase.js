import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD50rkyBWrQl_cOMm6dzRPC50GPrqI_XfQ",
    authDomain: "face-nick.firebaseapp.com",
    databaseURL: "https://face-nick.firebaseio.com",
    projectId: "face-nick",
    storageBucket: "face-nick.appspot.com",
    messagingSenderId: "751239694360",
    appId: "1:751239694360:web:50af4986bbacaf72abdb6d",
    measurementId: "G-82SJPCBVB2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;