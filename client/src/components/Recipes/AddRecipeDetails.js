// Packages
import React, { useState } from 'react';

// Components
import RecipeIngredients from './RecipeIngredients';

function AddRecipeDetails({ match, history }) {

    ////////////////////////////// HOOKS ///////////////////////////////////

    const [recipeId] = useState(match.params.id);
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientQuantity, setIngredientQuantity] = useState("");
    const [instructions, setInstructions] = useState("");
    const [hasAdded, setHasAdded] = useState(true);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // on change handlers
    // sets the hooks with input values
    const ingredientNameHandler = (e) => { setIngredientName(e.target.value); }
    const ingredientQuantityHandler = (e) => { setIngredientQuantity(e.target.value); }
    const instructionsHandler = (e) => { setInstructions(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const ingredientsSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { ingredientName, ingredientQuantity, recipeId }
            const response = await fetch("/recipe/add/ingredients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            setIngredientName("");
            setIngredientQuantity("");
            setHasAdded(true);
            window.location = `/recipe/add/${recipeId}`
        } catch (err) {
            console.log("Error at AddRecipeDetails ingredientsSubmitHandler ===", err.message);
        }
    }

    const instructionsSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { instructions, recipeId }
            const response = await fetch("/recipe/add/instructions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            setInstructions("");
            setHasAdded(false);
            history.push(`/recipe/${recipeId}`)
        } catch (err) {
            console.log("Error at AddRecipeDetails instructionsSubmitHandler ===", err.message);
        }
    }

    return (
        <div>
            <h2>Ingredients</h2>
            <form onSubmit={ingredientsSubmitHandler}>
                Ingredient Name: <input type="text" value={ingredientName} required onChange={ingredientNameHandler} />
                Ingredient Quantity: <input type="text" value={ingredientQuantity} required onChange={ingredientQuantityHandler} />
                <input type="submit" value="Add" />
            </form>
            <br /><br />
            { hasAdded ? <RecipeIngredients recipeId={recipeId} /> : null}
            <br /><br />
            <br />
            <h2>Instructions</h2>
            <form onSubmit={instructionsSubmitHandler}>
                <textarea rows="10" cols="80" values={instructions} required onChange={instructionsHandler} />
                <br />
                <input type="submit" value="Done" />
            </form>
        </div>
    )
}

export default AddRecipeDetails