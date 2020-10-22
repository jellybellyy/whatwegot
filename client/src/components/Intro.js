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
            window.location = "/items";
        } else {
            setLoggedIn(false);
        }
    }

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        authenticate()
    }, []);

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="col-5 offset-3">
                    <h1>What We Got?</h1>
                    <br />
                    <p>Today, the world stands on the brink of unprecedented famines. About 30 million people are experiencing alarming hunger, severe levels of food insecurity and malnutrition endanger countries around the world. With that said, it is so important to ensure we don’t waste food when we have the fortune of not having to worry about food security.</p>

                    <p>This app will help with tracking the expiry dates of groceries you’ve bought. This will help prevent the spoilage of unused or unfinished food. This app will also help with planning what you can cook with the items you have at home.</p>
                    <br />
                    <p><strong>Let’s Get Started</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Intro