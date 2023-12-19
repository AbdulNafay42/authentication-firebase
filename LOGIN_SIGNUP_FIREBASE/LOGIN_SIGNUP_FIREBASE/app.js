import { auth , createUserWithEmailAndPassword, googleProvider , GoogleAuthProvider ,signInWithPopup } from "./firebase.js";

const signup = () => {
  const email = document.getElementById("registerEmail")
const password = document.getElementById("registerPassword")
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Registered successfully", user);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error", errorMessage);

    });



  }
  const signupBtn = document.getElementById("signup-btn")

  signupBtn.addEventListener("click",signup );


///// google signin


let signInWithGoogle = ()=>{
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("user---->" , user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error---->" , errorMessage)
  });
}

  const signinWithGoogle = document.getElementById("signinWithGoogle")

  signinWithGoogle.addEventListener("click", signInWithGoogle );
