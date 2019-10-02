import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    
    // test
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // test
    ReactDOM.render(<h1>hex</h1>, root);
});