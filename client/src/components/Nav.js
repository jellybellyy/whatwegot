// Packages
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// Components
import Logout from './authentication/Logout';

function Nav() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // check if there's a user logged in
    const authenticate = () => {
        if (Cookies.get('logged_in')) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        authenticate()
    }, []);

    const navStyle = {
        'textDecoration': 'none',
        color: 'black'
    }

    return (
        <div>
            <nav>
                {loggedIn ?
                    <Link style={navStyle} to="/list">
                        <h3>Logo</h3>
                    </Link> :
                    <Link style={navStyle} to="/">
                        <h3>Logo</h3>
                    </Link>}
                <ul className="nav-links">
                    {loggedIn ? null : <Link style={navStyle} to="/login">
                        <li>Log In</li>
                    </Link>}
                    {loggedIn ? null : <Link style={navStyle} to="/signup">
                        <li>Sign Up</li>
                    </Link>}
                </ul>
                {loggedIn ? <Logout /> : null}
            </nav>
        </div>
    )
}

export default Nav