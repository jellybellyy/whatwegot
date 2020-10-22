const recipes = require("./controllers/recipes");

module.exports = (app, allModels) => {

    // Controller Functions 
    const usersControllerCallbacks = require("./controllers/users")(allModels);
    const itemsControllerCallbacks = require("./controllers/items")(allModels);
    const recipesControllerCallbacks = require("./controllers/recipes")(allModels);

    // Routes

    // Users
    app.post("/signup", usersControllerCallbacks.signup);
    app.post("/login", usersControllerCallbacks.login);

    // Items
    app.get("/items/:id", itemsControllerCallbacks.allItems);
    app.post("/item/add", itemsControllerCallbacks.addItem);
    app.get("/item/:id", itemsControllerCallbacks.itemDetails);
    app.put("/item/edit", itemsControllerCallbacks.editItem);
    app.delete("/item/delete/:id", itemsControllerCallbacks.deleteItem);
    app.get("/itemssearchresults/:id/:query", itemsControllerCallbacks.searchResults);

    // Recipes
    app.post("/recipe/add", recipesControllerCallbacks.addRecipe);
    app.post("/recipe/add/ingredients", recipesControllerCallbacks.addIngredients);
    app.post("/recipe/add/instructions", recipesControllerCallbacks.addInstructions);
    app.put("/recipe/edit/instructions", recipesControllerCallbacks.editInstructions);
    app.get("/recipe/instructions/:id", recipesControllerCallbacks.recipeInstructions);
    app.put("/recipe/ingredient/edit", recipesControllerCallbacks.editIngredient);
    app.delete("/ingredient/delete/:id", recipesControllerCallbacks.deleteIngredient);
    app.get("/recipe/ingredient/:id", recipesControllerCallbacks.ingredientDetails);
    app.get("/recipe/ingredients/:id", recipesControllerCallbacks.recipeIngredients);
    app.get("/recipessearchresults/:id/:query", recipesControllerCallbacks.searchResults);
    app.get("/lastrecipeid", recipesControllerCallbacks.lastRecipeId);
    app.put("/recipe/edit", recipesControllerCallbacks.editRecipe);
    app.delete("/recipe/delete/:id", recipesControllerCallbacks.deleteRecipe);
    app.get("/recipes/:id", recipesControllerCallbacks.allRecipes);
    app.get("/recipe/:id", recipesControllerCallbacks.recipeDetails);
};