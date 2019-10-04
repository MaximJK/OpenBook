import React from 'react';
import { Link } from 'react-router-dom';


const Greetings = ({ currentUser, logout }) => {
    debugger
    const personalGreeting = () => (
        <nav>
            <h1>{currentUser.username}</h1>
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

export default Greetings;