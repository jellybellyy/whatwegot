import React, { useState, useEffect } from 'react';

function EditItem({ match, history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [itemDetails, setItemDetails] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [description, setDescription] = useState("");
    const [itemId] = useState(match.params.id);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getItemDetails();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getItemDetails = async () => {
        const id = itemId;
        const results = await fetch(`/item/${id}`);
        const item = await results.json();
        setItemDetails(item);
        setName(item.name);
        setQuantity(item.quantity);
        setPurchaseDate(item.purchase_date);
        setExpiryDate(item.expiry_date);
        setDescription(item.description);
    }

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
            const body = { name, quantity, purchaseDate, expiryDate, description, itemId }
            const response = await fetch(`/item/edit`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            history.push("/items");
        } catch (err) {
            console.log("error at EditItem submitHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push("/items");
    }

    ////////////////////////////// EDIT FORM  ////////////////////////////////

    return (
        <div>
            <br /><br />
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
                <input type='submit' value="Edit" />
                <input type='submit' value="Cancel" onClick={cancelHandler} />
            </form>
        </div>
    )

}

export default EditItem