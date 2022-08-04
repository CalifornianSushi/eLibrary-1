import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBthT6ql7pYs6qHNVGv98tXFn2IZv-qv7I",
  authDomain: "elibrary-32b5f.firebaseapp.com",
  projectId: "elibrary-32b5f",
  storageBucket: "elibrary-32b5f.appspot.com",
  messagingSenderId: "526488470245",
  appId: "1:526488470245:web:e6740b2264436d08988a0c"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
