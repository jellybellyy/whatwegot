import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EditRecipeIngredients({ match, history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [recipeId] = useState(match.params.id);
    const [allIngredients, setAllIngredients] = useState([]);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getAllIngredients();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getAllIngredients = async () => {
        const id = recipeId;
        const results = await fetch(`/recipe/ingredients/${id}`);
        const ingredients = await results.json();
        setAllIngredients(ingredients);
    }

    const deleteHandler = async (e) => {
        try {
            console.log("deleteHandler clicked");
            const response = await fetch(`/ingredient/delete/${e.target.id}`, {
                method: "DELETE"
            });
            console.log(response);
            window.location = `/recipe/edit/ingredients/${recipeId}`;
        } catch (err) {
            console.log("error at EditRecipeIngredients deleteHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push(`/recipe/${recipeId}`);
    }

    let ingredients = allIngredients.map((item, index) => {
        return (
            <div key={index}>
                {item.name} | {item.quantity} <Link to={`/recipe/edit/ingredient/${item.id}`}><button>Edit</button></Link><input type='submit' value="X" id={item.id} onClick={deleteHandler} />
            </div>
        )
    })

    ////////////////////////////// EDIT FORM  ////////////////////////////////

    return (
        <div>
            <h1>Recipe Ingredients</h1>
            <h3>Name | Quantity</h3>
            {ingredients}
            <br /><br />
            <input type='submit' value="Cancel" onClick={cancelHandler} />
        </div>
    )

}

export default EditRecipeIngredients