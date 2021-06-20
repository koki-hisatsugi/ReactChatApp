import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase";
import Navbar from "./components/Navbar";
// import About from './About';
// import Home from './Home';
import { LoginScene } from "./screens/loginScene";
import { ChatScene } from "./screens/chatScene";

import ENV from "../Env.json";

var firebaseConfig = {
  apiKey: "AIzaSyBnB460wsbYL17Go58SpDfn9Jl6RGDuCN8",
  authDomain: "reactchatapp-dbf49.firebaseapp.com",
  projectId: "reactchatapp-dbf49",
  storageBucket: "reactchatapp-dbf49.appspot.com",
  messagingSenderId: "376135896500",
  appId: "1:376135896500:web:cc1aab40b4182b2911f6e1"
};
firebase.initializeApp(firebaseConfig);

export const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route exact path="/" component={LoginScene} />
          {/* <Route exact path="/" component={ChatScene} /> */}
          {/* <Route path="/Login" component={LoginScene} /> */}
        </div>
      </Router>
    </div>
  );
};
