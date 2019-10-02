import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";
import * as utils from './util/session_api_util.js'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    window.utils = utils
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // test
    ReactDOM.render(<Root store={store} />, root);
});