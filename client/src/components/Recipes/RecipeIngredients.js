import React, { useState, useEffect } from 'react';

function RecipeIngredients({ recipeId }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

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

    let ingredients = allIngredients.map((item, index) => {
        return (
            <div key={index}>
                {item.name} | {item.quantity}
            </div>
        )
    })

    return (
        <div>
            {ingredients}
        </div>
    )
}

export default RecipeIngredients