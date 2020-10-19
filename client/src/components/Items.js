// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Items() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [userId] = useState(Cookies.get('user_id'));
    const [allItems, setAllItems] = useState([]);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getAllItems();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getAllItems = async () => {
        const id = userId;
        const results = await fetch(`/items/${id}`)
        const items = await results.json();
        setAllItems(items);
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

    let items = allItems.map((item, index) => {

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
            <div>Name | Quantity | Purchase Date | Expiry Date | Description | Days Till Expiry</div>
            {items}
        </div>
    )
}

export default Items