import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
           <div id="footer">
                <a href="https://www.linkedin.com/in/maxkoiwai/">
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/MaximJK/OpenBook">
                <i className="fab fa-github"></i>
                </a>
                <a href="https://maximjk.github.io/" id="footerLink">©  Max Koiwai</a>
           </div>

        );
    }
};

export default Footer;