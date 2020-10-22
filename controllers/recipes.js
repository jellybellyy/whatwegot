module.exports = (db) => {

    const allRecipes = (req, res) => {

        console.log("allRecipes controller triggered");

        const userId = req.params.id;

        db.recipes.getAllRecipes(userId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, allRecipes ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const recipeDetails = (req, res) => {

        console.log("recipeDetails controller triggered");

        const recipeId = req.params.id;

        db.recipes.getRecipeDetails(recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipe controller, recipeDetails ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const addRecipe = (req, res) => {

        console.log("addRecipe controller triggered");

        let { name, description, userId } = req.body;

        db.recipes.getAddRecipe(name, description, userId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, addRecipe ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const addIngredients = (req, res) => {

        console.log("addIngredients controller triggered");

        let { ingredientName, ingredientQuantity, recipeId } = req.body;

        db.recipes.getAddIngredients(ingredientName, ingredientQuantity, recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, addIngredients ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const addInstructions = (req, res) => {

        console.log("addInstructions controller triggered");

        let { instructions, recipeId } = req.body;

        db.recipes.getAddInstructions(instructions, recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, addInstructions ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const recipeIngredients = (req, res) => {

        console.log("RecipeIngredients controller triggered");

        const recipeId = req.params.id;

        db.recipes.getRecipeIngredients(recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, RecipeIngredients ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const searchResults = (req, res) => {

        console.log("searchResults controller triggered");

        let userId = req.params.id;
        let searchQuery = req.params.query;

        db.recipes.getSearchResults(userId, searchQuery, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, searchResults ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const lastRecipeId = (req, res) => {

        console.log("lastRecipeId controller triggered");

        db.recipes.getLastRecipeId((err, result) => {
            if (err) {
                console.log("Error at recipes controller, lastRecipeId ===", err.message);
            }
            else {
                res.send(result.rows[0]);
            }
        })
    }

    const editRecipe = (req, res) => {

        console.log("editRecipe controller triggered");

        let { name, description, recipeId } = req.body;

        db.recipes.getEditRecipe(name, description, recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, editRecipe ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const editIngredient = (req, res) => {

        console.log("editIngredient controller triggered");

        let { name, quantity, ingredientId } = req.body;

        db.recipes.getEditIngredient(name, quantity, ingredientId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, editIngredient ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const deleteIngredient = (req, res) => {

        console.log("deleteIngredient controller triggered");

        let ingredientId = req.params.id;

        db.recipes.getDeleteIngredient(ingredientId, (err, result) => {
            if (err) {
                console.log("Error at items controller, deleteIngredient ===", err.message);
            }
            else {
                res.send("Item deleted!");
            }
        })
    }

    const editInstructions = (req, res) => {

        console.log("editInstructions controller triggered");

        let { instructions, recipeId } = req.body;

        db.recipes.getEditInstructions(instructions, recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, editInstructions ===", err.message);
            }
            else {
                res.send(result.rows);
            }
        })
    }

    const ingredientDetails = (req, res) => {

        console.log("ingredientDetails controller triggered");

        let ingredientId = req.params.id;

        db.recipes.getIngredientDetails(ingredientId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, ingredientDetails ===", err.message);
            }
            else {
                res.send(result.rows[0]);
            }
        })
    }

    const recipeInstructions = (req, res) => {

        console.log("recipeInstructions controller triggered");

        let recipeId = req.params.id;

        db.recipes.getRecipeInstructions(recipeId, (err, result) => {
            if (err) {
                console.log("Error at recipes controller, recipeInstructions ===", err.message);
            }
            else {
                res.send(result.rows[0]);
            }
        })
    }

    const deleteRecipe = (req, res) => {

        console.log("deleteRecipe controller triggered");

        let recipeId = req.params.id;

        db.recipes.getDeleteRecipe(recipeId, (err, result) => {
            if (err) {
                console.log("Error at items controller, deleteRecipe ===", err.message);
            }
            else {
                res.send("Item deleted!");
            }
        })
    }

    return {
        allRecipes,
        recipeDetails,
        addRecipe,
        addIngredients,
        addInstructions,
        recipeIngredients,
        searchResults,
        lastRecipeId,
        editRecipe,
        editIngredient,
        deleteIngredient,
        editInstructions,
        ingredientDetails,
        recipeInstructions,
        deleteRecipe
    }

}