import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Intro() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // check if there's a user logged in
    const authenticate = () => {
        if (Cookies.get('logged_in')) {
            setLoggedIn(true);
            console.log(loggedIn);
            window.location = "/list";
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
            <h1>What We Got?</h1>
            <p>This is an app dedicated to helping you track the expiry dates of groceries you've bought. </p>
        </div>
    )
}

export default Intro