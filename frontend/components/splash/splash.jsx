import React from 'react';
import SignUpFormContainer from "../session/signup_form_container"
import LoginFormContainer from "../session/login_form_container"
import BooksIndexContainer from "../books/books_index_container"

const Splash = ({errors}) =>  {
    if (Object.keys(errors).length === 0) {
        errors = ''
    } else {
        errors = Object.values(errors)[0].map(error => {
            return (
                <li>
                    {error}
                </li>
            )
        })

    }
    return (
        <div>
    <div className="splash-all">
            <header className="splash-header">
                <div className="splash-title">open<span className="book">book</span> </div>
                <div className="splash-login-container"> <LoginFormContainer /> </div>
                
        </header>
       
        
        <div className="splash-signup-div">
            <img id="splash-slogan" src="https://s.gr-assets.com/assets/home/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
            <div>
                    <ul className='errorBox'>
                        {Object.values(errors)}
                    </ul>
        <div className="splash-signup-container"> <SignUpFormContainer /> </div >
                    </div>
        
        </div>
            
    </div>
    <div className="books-splash">
        <BooksIndexContainer
         />
    </div>
    </div>
    )
}


export default Splash