import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import moment from 'moment';

function ItemsSearchResults({ query, backHandler }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [results, setResults] = useState([]);
    const [userId] = useState(Cookies.get('user_id'));

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getResults();
    }, [query]);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getResults = async () => {
        let id = userId
        let searchQuery = query;
        const results = await fetch(`/itemssearchresults/${id}/${searchQuery}`);
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
            window.location = "/items";
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
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.purchase_date}</td>
                    <td>{item.expiry_date}</td>
                    <td>{item.description}</td>
                    <td>{difference}</td>
                    <td><Link to={`/item/edit/${item.id}`}><button>Edit</button></Link></td>
                    <td><input type='submit' value="X" id={item.id} onClick={deleteHandler} /></td>
                </tr>
            )
        }
        else if (difference > 0 && difference < 4) {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.purchase_date}</td>
                    <td>{item.expiry_date}</td>
                    <td>{item.description}</td>
                    <td>expiring soon</td>
                    <td><Link to={`/item/edit/${item.id}`}><button>Edit</button></Link></td>
                    <td><input type='submit' value="X" id={item.id} onClick={deleteHandler} /></td>
                </tr>
            )
        }
        else if (difference === 0) {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.purchase_date}</td>
                    <td>{item.expiry_date}</td>
                    <td>{item.description}</td>
                    <td>expiring today</td>
                    <td><Link to={`/item/edit/${item.id}`}><button>Edit</button></Link></td>
                    <td><input type='submit' value="X" id={item.id} onClick={deleteHandler} /></td>
                </tr>
            )
        }
        else {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.purchase_date}</td>
                    <td>{item.expiry_date}</td>
                    <td>{item.description}</td>
                    <td>expired</td>
                    <td><Link to={`/item/edit/${item.id}`}><button>Edit</button></Link></td>
                    <td><input type='submit' value="X" id={item.id} onClick={deleteHandler} /></td>
                </tr>
            )
        }

    })

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Purchase Date</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Days Till Expiry</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults}
                </tbody>
            </table>
            <button onClick={backHandler}>Back</button>
        </div>
    )

}

export default ItemsSearchResults