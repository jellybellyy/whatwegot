// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Items() {

    let today = moment().format('YYYY-MM-DD');
    let expiryDate = "2020-10-25"
    let admission = moment(today, 'YYYY-MM-DD');
    let discharge = moment(expiryDate, 'YYYY-MM-DD');
    let difference = discharge.diff(admission, 'days');

    console.log(today);
    // console.log(difference);

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

        let today = moment().format('YYYY-MM-DD');
        // let expiryDate = { item.expiry_date };

        return (

            <div key={index}>
                {item.name} | {item.quantity} | {item.purchase_date} | {item.expiry_date} | {item.description} |
                <Link to={`/list/edit/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
            </div>
        )
    })

    return (
        <div>
            <div>Name | Quantity | Purchase Date | Expiry Date | Description | Days Till Expiry</div>
            {items}
        </div>
    )
}

export default Items