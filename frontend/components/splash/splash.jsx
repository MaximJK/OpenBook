import React from 'react';
import { Link } from 'react-router-dom';


const Splash = ({ currentUser, logout }) => {
    const personalGreeting = () => (
        <nav>
            <h1>hello, {currentUser.username}</h1>
            <button onClick={logout}>Log Out</button>
        </nav>

    );

    const sessionlink = () => (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
        </nav>
    );


    return currentUser ? personalGreeting() : sessionlink();
};

export default Splash;