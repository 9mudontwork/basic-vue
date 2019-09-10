import firebase from "./firebaseInit";

const firestoreDb = firebase.firestore();

firestoreDb.settings({
  timestampsInSnapshots: true
});

firestoreDb.enablePersistence();

export default firestoreDb;
