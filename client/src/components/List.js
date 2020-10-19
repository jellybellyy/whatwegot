// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// Components
import Items from './Items';
import Search from './Search';
import SearchResults from './SearchResults';

function List() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [loggedIn, setLoggedIn] = useState(false);
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

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

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        authenticate()
    }, []);

    return (
        <div>
            {loggedIn ? null : <h1>You do not have access to this page. Please log in or sign up for an account!</h1>}
            {hasSearched ? <h1>Search Results</h1> : <h1>Your Items</h1>}
            {loggedIn ? <Search inputHandler={inputHandler} submitHandler={submitHandler} input={input} /> : null}
            <br />
            {loggedIn && !hasSearched ? <Items /> : null}
            <br />
            {loggedIn && !hasSearched ? <Link to="/list/add"><button>Add Item</button></Link> : null}

            {loggedIn && hasSearched ? <SearchResults query={query} backHandler={backHandler} /> : null}
        </div>
    )
}

export default List