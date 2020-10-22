// Packages
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// Components
import Logout from './Authentication/Logout';

function Nav() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    //////////////////////////////// STYLE ///////////////////////////////////

    const navStyle = {
        'textDecoration': 'none',
        color: 'black'
    }

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

    return (
        <div>
            <nav>
                {/* {loggedIn ?
                    <Link style={navStyle} to="/home">
                        <h3>Logo</h3>
                    </Link> :
                    <Link style={navStyle} to="/">
                        <h3>Logo</h3>
                    </Link>} */}
                <h3>WhatWeGot</h3>
                <ul className="nav-links">
                    {loggedIn ? null : <Link style={navStyle} to="/login">
                        <li>Log In</li>
                    </Link>}
                    {loggedIn ? null : <Link style={navStyle} to="/signup">
                        <li>Sign Up</li>
                    </Link>}
                    {loggedIn ? <Link style={navStyle} to="/items">Items</Link> : null}
                    {loggedIn ? <Link style={navStyle} to="/recipes">Recipes</Link> : null}
                </ul>
                {loggedIn ? <Logout /> : null}
            </nav>
        </div>
    )
}

export default Nav