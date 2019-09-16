import firebase from "firebase";

export default (to, from, next) => {
  const user = firebase.auth().currentUser,
    toAuthPage = to.name == "signin" || to.name == "signup" ? true : false,
    dontSignInAgain = to.matched.some(record => record.meta.dontSignInAgain);

  if (!user) {
    if (toAuthPage) {
      next();
      return;
    }
    next("signin");
    return;
  } else {
    if (dontSignInAgain) {
      next("/");
      return;
    }
    next();
  }
};
