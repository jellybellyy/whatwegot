import React, { useState } from 'react';
import Cookies from 'js-cookie'

function AddItem(props) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [description, setDescription] = useState("");
    const [userId] = useState(Cookies.get('user_id'));

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // on change handlers
    // sets the hooks with input values
    const nameHandler = (e) => { setName(e.target.value); }
    const quantityHandler = (e) => { setQuantity(e.target.value); }
    const purchaseDateHandler = (e) => { setPurchaseDate(e.target.value); }
    const expiryDateHandler = (e) => { setExpiryDate(e.target.value); }
    const descriptionHandler = (e) => { setDescription(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { name, quantity, purchaseDate, expiryDate, description, userId }
            const response = await fetch("/items/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            props.history.push("/list")
        } catch (err) {
            console.log("error at AddItem submitHandler ===", err.message);
        }
    }

    ////////////////////////////// EDIT FORM  ////////////////////////////////

    return (
        <div>
            <form onSubmit={submitHandler}>
                Name: <input type='text' value={name} required onChange={nameHandler} />
                <br />
                Quantity: <input type='text' value={quantity} onChange={quantityHandler} />
                <br />
                Purchase Date: <input type='date' value={purchaseDate} required onChange={purchaseDateHandler} />
                <br />
                Expiry Date: <input type='date' value={expiryDate} required onChange={expiryDateHandler} />
                <br />
                Description: <input type='text' value={description} onChange={descriptionHandler} />
                <br />
                <input type='submit' value="Add" />
            </form>
        </div>
    )

}

export default AddItem