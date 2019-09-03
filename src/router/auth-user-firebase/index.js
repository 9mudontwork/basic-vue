import firebase from "firebase";

export default (to, from, next) => {
  const user = firebase.auth().currentUser;
  if (!user) {
    next("/signin");
  }
  next();
};
