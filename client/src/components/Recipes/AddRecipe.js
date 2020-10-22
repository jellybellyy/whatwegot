import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function AddRecipe({ history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [userId] = useState(Cookies.get('user_id'));
    const [lastRecipeId, setLastRecipeId] = useState("");

    //////////////////////////////// STYLE ///////////////////////////////////

    const linkStyle = {
        'textDecoration': 'none',
        color: 'black'
    }

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getLastRecipeId()
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getLastRecipeId = async () => {
        const results = await fetch("/lastrecipeid");
        const recipeId = await results.json();

        // + 1 to assign it with the next available recipe id number
        setLastRecipeId(recipeId.max + 1);
    }

    // on change handlers
    // sets the hooks with input values
    const nameHandler = (e) => { setName(e.target.value); }
    const descriptionHandler = (e) => { setDescription(e.target.value); }
    // const ingredientsHandler = (e) => { setIngredients(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { name, description, userId }
            const response = await fetch("/recipe/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            history.push(`/recipe/add/${lastRecipeId}`)
        } catch (err) {
            console.log("error at AddRecipe submitHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push(`/recipes`);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Recipe Name</h2>
            <input type="text" value={name} required onChange={nameHandler} />
            <br />
            <h2>Description</h2>
            <textarea rows="4" cols="80" value={description} required onChange={descriptionHandler} />
            <br /><br />
            <input type="submit" value="Add Ingredients & Instructions" id={lastRecipeId} />
            <br />
            <input type='submit' value="Cancel" onClick={cancelHandler} />
        </form>
    )
}

export default AddRecipe