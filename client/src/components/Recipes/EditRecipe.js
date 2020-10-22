import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EditRecipe({ match, history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [recipeId] = useState(match.params.id);
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getRecipeDetails();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getRecipeDetails = async () => {
        const id = recipeId;
        const results = await fetch(`/recipe/${id}`);
        const details = await results.json();
        setRecipeDetails(details);
        setName(details[0].recipe_name);
        setDescription(details[0].description);
    }

    // on change handlers
    // sets the hooks with input values
    const nameHandler = (e) => { setName(e.target.value); }
    const descriptionHandler = (e) => { setDescription(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { name, description, recipeId }
            const response = await fetch(`/recipe/edit`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            history.push(`/recipe/${recipeId}`);
        } catch (err) {
            console.log("error at EditRecipe submitHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push(`/recipe/${recipeId}`);
    }

    ////////////////////////////// EDIT FORM  ////////////////////////////////

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Recipe Name</h2>
                <input type='text' value={name} required onChange={nameHandler} />
                <br />
                <h2>Description</h2>
                <textarea rows="4" cols="80" value={description} required onChange={descriptionHandler} />
                <br />
                <input type="submit" value="Edit" />
                <input type='submit' value="Cancel" onClick={cancelHandler} />
            </form>
        </div>
    )

}

export default EditRecipe