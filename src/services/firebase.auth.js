import Swal from "sweetalert2";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWaGzFn1rr0Le2wmtV1Z5S9oqmEiVMr3M",
  authDomain: "shopco-e-commerce.firebaseapp.com",
  projectId: "shopco-e-commerce",
  storageBucket: "shopco-e-commerce.appspot.com",
  messagingSenderId: "125094143726",
  appId: "1:125094143726:web:de68039d295f34ecbfb5ff",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// login function
export async function signIn(email, password) {
  const auth = getAuth();
  const res = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      Swal.fire({
        title: "Welcome Back!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: `Error!`,
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log("error code: ", errorCode);
      console.log("error message: ", errorMessage);
    });
  return res;
}

// sign up
export async function signUp(email, password) {
  const auth = getAuth();
  const res = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      Swal.fire({
        title: "Account Created Successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        title: `Error!`,
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log("error code: ", errorCode);
      console.log("error message: ", errorMessage);
    });
  return res;
}
