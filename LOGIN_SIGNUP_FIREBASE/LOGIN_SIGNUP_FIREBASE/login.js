import {auth, signInWithEmailAndPassword} from "./firebase.js ";

const login = () => {
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  signInWithEmailAndPassword(auth, email.value , password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Registered successfully", user);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error", errorMessage);

    });
};
const loginBtn = document.getElementById("login-btn");

if(loginBtn){
   loginBtn.addEventListener("click", login);
}