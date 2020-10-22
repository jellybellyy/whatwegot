import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecipeDetails({ match, history }) {

    ////////////////////////////// HOOKS ///////////////////////////////////

    const [recipeId] = useState(match.params.id);
    const [allDetails, setAllDetails] = useState([]);
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getRecipeDetails();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getRecipeDetails = async () => {
        const id = recipeId;
        const results = await fetch(`/recipe/${id}`)
        const details = await results.json();
        setAllDetails(details);
        setRecipeName(details[0].recipe_name);
        setRecipeDescription(details[0].description);
        setRecipeInstructions(details[0].instructions);
    }

    const deleteHandler = async () => {
        try {
            console.log("deleteHandler clicked");
            const response = await fetch(`/recipe/delete/${recipeId}`, {
                method: "DELETE"
            });
            console.log(response);
            history.push("/recipes")
        } catch (err) {
            console.log("error at RecipeDetails deleteHandler ===", err.message);
        }
    }

    let ingredients = allDetails.map((item, index) => {
        return (
            <div key={index}>
                {`${item.ingredient_name} - ${item.quantity}`}
            </div >
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col=sm">
                    <h1>{recipeName}</h1>
                    <h2>Description</h2>
                    {recipeDescription}
                    <br /><br />
                    <Link to={`/recipe/edit/${recipeId}`}><button>Edit</button></Link>
                    <br /><br />
                    <h2>Ingredients</h2>
                    {ingredients}
                    <br />
                    <Link to={`/recipe/edit/ingredients/${recipeId}`}><button>Edit</button></Link>
                    <br /><br />
                    <h2>Instructions</h2>
                    {recipeInstructions}
                    <br /><br />
                    <Link to={`/recipe/edit/instructions/${recipeId}`}><button>Edit</button></Link>
                    <br /><br /><br /><br />
                    <button onClick={deleteHandler}>Delete Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails