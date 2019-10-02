import Splash from './component/splash/splash'
import React from "react";
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>o p e n  b o o k</h1>
            <Splash />
        </header>
        <switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </switch>
    </div>
);
debugger
export default App;