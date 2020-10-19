import React from 'react';
import Cookies from 'js-cookie';

function Logout() {

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const clickHandler = (e) => {
        e.preventDefault();
        Cookies.remove("logged_in");
        Cookies.remove("user_id");
        Cookies.remove("username");
        window.location = "/";
    }

    return (
        <button onClick={clickHandler}>Log Out</button>
    )
}

export default Logout