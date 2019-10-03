import { HashRouter } from "react-router-dom";
import React from "react";
import App from './anythingelse';
import { Provider } from "react-redux";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;