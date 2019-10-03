import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import GreetingsContainer from './greetings/greetings_container';
import React from "react";
// import SplashContainer from './splash/splash_container'
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
            <Link to="/" >
            <h1>o p e n  b o o k</h1>
            </Link>
            <GreetingsContainer/>
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            {/* <AuthRoute path="/" components={SplashContainer}/> */}
            
        </Switch>
    </div>
);

export default App;