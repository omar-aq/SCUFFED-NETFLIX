import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import firebase from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyBMxMkfQCuN1ul-61CXhoCTUQ9GoAS0ITo",
  authDomain: "react-netflix-b5015.firebaseapp.com",
  projectId: "react-netflix-b5015",
  storageBucket: "react-netflix-b5015.appspot.com",
  messagingSenderId: "313494100647",
  appId: "1:313494100647:web:5d6f57d5973cc5814fd982",
  measurementId: "G-26F89CVDR5",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
