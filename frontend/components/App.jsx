import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import GreetingsContainer from './greetings/greetings_container';
import HomePageContainer from './homepage/home_page_container'
import SplashContainer from './splash/splash_container'
import React from "react";
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    withRouter,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <>
    <header>
        <ProtectedRoute exact path='/home' component={GreetingsContainer}/>
    </header>
    <div>
        <Switch>
            <Route path='/' component={SplashContainer}/>
            <ProtectedRoute exact path='/home' component={HomePageContainer} />
        </Switch>
    </div>
    </>
);

export default withRouter(App)