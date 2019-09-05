import firebase from "firebase";

export default (to, from, next) => {
  const user = firebase.auth().currentUser,
    toPage = to.name,
    dontSignInAgain = to.matched.some(record => record.meta.dontSignInAgain);

  if (!user) {
    if (toPage == "signin" || toPage == "signup") {
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
