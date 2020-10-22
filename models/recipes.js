const e = require("express");

module.exports = (dbPoolInstance) => {

    const getAllRecipes = (userId, callback) => {

        let query = `SELECT * FROM recipes WHERE user_id = '${userId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getAllRecipes ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getRecipeDetails = (recipeId, callback) => {

        let query = `SELECT recipes.id as recipe_id, recipes.name as recipe_name, description, ingredients.name as ingredient_name, ingredients.quantity, instructions.instructions  FROM recipes INNER JOIN ingredients ON recipes.id = ingredients.recipe_id INNER JOIN instructions ON recipes.id = instructions.recipe_id WHERE recipes.id = ${recipeId}`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipe model, getRecipeDetails ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getAddRecipe = (name, description, userId, callback) => {

        let query = `INSERT INTO recipes (name, description, user_id) VALUES (INITCAP($$${name}$$), $$${description}$$, '${userId}')`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getAddRecipe ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getAddIngredients = (ingredientName, ingredientQuantity, recipeId, callback) => {

        let query = `INSERT INTO ingredients (name, quantity, recipe_id) VALUES (INITCAP($$${ingredientName}$$), INITCAP($$${ingredientQuantity}$$), '${recipeId}')`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getAddIngredients ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getAddInstructions = (instructions, recipeId, callback) => {

        let query = `INSERT INTO instructions (instructions, recipe_id) VALUES ($$${instructions}$$, '${recipeId}')`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getAddInstructions ===", err.message);
                callback(null, null)
            }
            else {
                callback(null, result);
            }
        })
    }

    const getRecipeIngredients = (recipeId, callback) => {

        let query = `SELECT * FROM ingredients WHERE recipe_id = ${recipeId}`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getRecipeIngredients ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getSearchResults = (userId, searchQuery, callback) => {

        let query = `SELECT * FROM recipes WHERE lower(name) LIKE lower($$%${searchQuery}%$$) AND user_id = '${userId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getSearchResults ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getLastRecipeId = (callback) => {

        let query = `SELECT MAX(id) FROM recipes`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getLastRecipeId ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getEditRecipe = (name, description, recipeId, callback) => {

        let query = `UPDATE recipes SET name = INITCAP($$${name}$$), description = $$${description}$$ WHERE id = '${recipeId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getEditRecipe ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getEditIngredient = (name, quantity, ingredientId, callback) => {

        let query = `UPDATE ingredients SET name = INITCAP($$${name}$$), quantity = INITCAP($$${quantity}$$) WHERE id = '${ingredientId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getEditIngredient ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getDeleteIngredient = (ingredientId, callback) => {

        let query = `DELETE FROM ingredients WHERE id = '${ingredientId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getDeleteIngredient ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getEditInstructions = (instructions, recipeId, callback) => {

        let query = `UPDATE instructions SET instructions = $$${instructions}$$ WHERE recipe_id = '${recipeId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getEditInstructions ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getIngredientDetails = (ingredientId, callback) => {

        let query = `SELECT * FROM ingredients WHERE id = '${ingredientId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getIngredientDetails ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getRecipeInstructions = (recipeId, callback) => {

        let query = `SELECT * FROM instructions WHERE recipe_id = '${recipeId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at recipes model, getRecipeInstructions ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getDeleteRecipe = (recipeId, callback) => {

        let query = `DELETE FROM recipes WHERE id = '${recipeId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getDeleteRecipe ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    return {
        getAllRecipes,
        getRecipeDetails,
        getAddRecipe,
        getAddIngredients,
        getAddInstructions,
        getRecipeIngredients,
        getSearchResults,
        getLastRecipeId,
        getEditRecipe,
        getEditIngredient,
        getDeleteIngredient,
        getEditInstructions,
        getIngredientDetails,
        getRecipeInstructions,
        getDeleteRecipe
    }

}