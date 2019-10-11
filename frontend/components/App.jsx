import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import GreetingsContainer from './greetings/greetings_container';
import HomePageContainer from './homepage/home_page_container'
import SplashContainer from './splash/splash_container'
import BookShowContainer from './books/book_show_container'
import BooksIndexContainer from './books/books_index_container'
import BookshelfContainer from './bookshelves/bookshelf_container'
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
        <ProtectedRoute path='/' component={GreetingsContainer}/>
    </header>
    <div>
        <Switch>
            <AuthRoute exact path='/' component={SplashContainer}/>
            <ProtectedRoute exact path='/home' component={HomePageContainer} />
            <ProtectedRoute exact path='/books/:bookId' component={BookShowContainer} />
            <ProtectedRoute exact path='/bookshelves/:userId' component={BookshelfContainer} />
        </Switch>
    </div>
    </>
);

export default withRouter(App)