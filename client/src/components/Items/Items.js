// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// Components
import AllItems from './AllItems';
import Search from '../Search/Search';
import ItemsSearchResults from '../Search/ItemsSearchResults';

function Items() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        authenticate()
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // check if there's a user logged in
    const authenticate = () => {
        if (Cookies.get('logged_in')) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    // on change handlers
    //set the hooks with input values
    const inputHandler = (e) => { setInput(e.target.value); }

    //on submit handler
    // sends the request to the backend
    const submitHandler = (e) => {
        setQuery(input);
        setHasSearched(true);
        setInput("");
    }

    const backHandler = (e) => {
        setQuery("");
        setHasSearched(false);
    }

    return (
        <div>
            {hasSearched ? <h1>Search Results</h1> : <h1>Your Items</h1>}
            {loggedIn ? <Search inputHandler={inputHandler} submitHandler={submitHandler} input={input} /> : null}
            <br />
            {loggedIn && !hasSearched ? <AllItems /> : null}
            <br />
            {loggedIn && !hasSearched ? <Link to="/item/add"><button>Add Item</button></Link> : null}

            {loggedIn && hasSearched ? <ItemsSearchResults query={query} backHandler={backHandler} /> : null}
        </div>
    )
}

export default Items