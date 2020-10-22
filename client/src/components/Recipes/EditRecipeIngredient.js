import React, { useState, useEffect } from 'react';

function EditRecipeIngredient({ match, history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [ingredientId] = useState(match.params.id);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getIngredientDetails();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getIngredientDetails = async () => {
        const id = ingredientId;
        const results = await fetch(`/recipe/ingredient/${id}`);
        const details = await results.json();
        setName(details.name);
        setQuantity(details.quantity);
    }

    // on change handlers
    // sets the hooks with input values
    const nameHandler = (e) => { setName(e.target.value); }
    const quantityHandler = (e) => { setQuantity(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { name, quantity, ingredientId }
            const response = await fetch(`/recipe/ingredient/edit`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            history.push("/recipes");
        } catch (err) {
            console.log("error at EditRecipeIngredient submitHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push("/recipes");
    }

    ////////////////////////////// EDIT FORM  ////////////////////////////////

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Edit Ingredient</h2>
                Name: <input type='text' value={name} required onChange={nameHandler} />
                <br />
                Quantity: <input type='text' value={quantity} onChange={quantityHandler} />
                <br />
                <input type='submit' value="Edit" />
                <input type='submit' value="Cancel" onClick={cancelHandler} />
            </form>
        </div>
    )

}

export default EditRecipeIngredient