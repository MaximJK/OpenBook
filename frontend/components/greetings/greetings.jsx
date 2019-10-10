import React from 'react';
import { Link } from 'react-router-dom';


const Greetings = ({ currentUser, logout }) => {
    const personalGreeting = () => (
        <nav>
            <div className="nav-bar">
            <div id="small-title" className="splash-title">open<span className="book">book</span> </div>
            <div id='user-nav'>
            <h1 className='block' id='username'>{currentUser.username}</h1>
                    <button className='block' id='logout' onClick={logout}>Log Out</button>
            </div>
            </div>
        </nav>

    );

    // const sessionlink = () => (
    //     <nav>
    //         <Link to="/login">Login</Link>
    //         <Link to="/signup">Sign up</Link>
    //     </nav>
    // );

    return personalGreeting();
    // return currentUser ? personalGreeting() : sessionlink();
};

export default Greetings;