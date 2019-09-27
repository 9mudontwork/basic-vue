import firebase from "./firebaseInit";

const firebaseFirestore = firebase.firestore();

firebaseFirestore.settings({});

firebaseFirestore.enablePersistence();

export default firebaseFirestore;
