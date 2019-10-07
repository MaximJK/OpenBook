import React from 'react';
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"
import BooksIndex from "../books/books_index_contrainer"

const Splash = () =>  {
    return (
        <>
    <div className="splash-all">
            <header className="splash-header">
                <div id="splash-title">open<span className="book">book</span> </div>
                <div className="splash-login-container"> <LoginFormContainer /> </div>
        </header>
        <br/>

        <div className="splash-signup-div">
                <img id="splash-slogan" src="https://s.gr-assets.com/assets/home/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
        <div className="splash-signup-container"> <SignUpFormContainer /> </div >
        </div>
    </div>
    <div className="books-splash">
        <BooksIndex />
    </div>
    </>
    )
}


export default Splash