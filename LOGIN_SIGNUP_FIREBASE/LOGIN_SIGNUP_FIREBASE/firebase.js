import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth ,  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup
 } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDviO5jeCi2DfQ6e4lsvLRWg2-TH7MFCX8",
  authDomain: "authentication-2ae05.firebaseapp.com",
  projectId: "authentication-2ae05",
  storageBucket: "authentication-2ae05.appspot.com",
  messagingSenderId: "953517869697",
  appId: "1:953517869697:web:c3ec49b62860d4de629b80",
  measurementId: "G-6VMG90Q9WT"
};


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  export{
     auth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     googleProvider,
     GoogleAuthProvider,
     signInWithPopup
    }
