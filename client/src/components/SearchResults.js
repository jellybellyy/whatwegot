import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function SearchResults({ query, backHandler }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [results, setResults] = useState([]);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getResults();
    }, [query]);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getResults = async () => {
        let searchQuery = query;
        const results = await fetch(`/searchresults/${searchQuery}`);
        const searchResults = await results.json();
        console.log(searchResults);
        setResults(searchResults);
    }

    const deleteHandler = async (e) => {
        try {
            console.log("deleteHandler clicked");
            const response = await fetch(`/item/delete/${e.target.id}`, {
                method: "DELETE"
            });
            console.log(response);
            window.location = "/list";
        } catch (err) {
            console.log("error at Items deleteHander ===", err.message);
        }
    }

    let searchResults = results.map((item, index) => {

        let today = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');
        let expiryDate = moment(`${item.expiry_date}`, 'YYYY-MM-DD');
        let difference = expiryDate.diff(today, 'days');

        if (difference > 3) {
            return (
                <div key={index}>
                    {item.name} | {item.quantity} | {item.purchase_date} | {item.expiry_date} | {item.description} | {difference} <Link to={`/list/edit/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
                </div>
            )
        }
        else if (difference > 0 && difference < 4) {
            return (
                <div key={index}>
                    {item.name} | {item.quantity} | {item.purchase_date} | {item.expiry_date} | {item.description} | expiring soon! <Link to={`/list/edit/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
                </div>
            )
        }
        else if (difference === 0) {
            return (
                <div key={index}>
                    {item.name} | {item.quantity} | {item.purchase_date} | {item.expiry_date} | {item.description} | expiring today! <Link to={`/list/edit/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
                </div>
            )
        }
        else {
            return (
                <div key={index}>
                    {item.name} | {item.quantity} | {item.purchase_date} | {item.expiry_date} | {item.description} | expired! <Link to={`/list/edit/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
                </div>
            )
        }
    })

    return (
        <div>
            { searchResults}
            <button onClick={backHandler}>Back</button>
        </div>
    )

}

export default SearchResults