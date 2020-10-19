// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// Components
import Items from './Items';

function List() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // check if there's a user logged in
    const authenticate = () => {
        if (Cookies.get('logged_in')) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            // props.history.push("/");
            // console.log("false");
            // window.location = "/";
        }
    }

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        authenticate()
    }, []);

    return (
        <div>
            {loggedIn ? <h1>Your Items</h1> : <h1>You do not have access to this page. Please log in or sign up for an account!</h1>}
            {loggedIn ? <Items /> : null}
            <br />
            {loggedIn ? <Link to="/list/add"><button>Add Item</button></Link> : null}
        </div>
    )
}

export default List