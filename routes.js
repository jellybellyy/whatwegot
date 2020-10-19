module.exports = (app, allModels) => {

    // Controller Functions 
    const usersControllerCallbacks = require("./controllers/users")(allModels);
    const itemsControllerCallbacks = require("./controllers/items")(allModels);

    // Routes

    // Users
    app.post("/signup", usersControllerCallbacks.signup);
    app.post("/login", usersControllerCallbacks.login);

    // Items
    app.get("/items/:id", itemsControllerCallbacks.allItems);
    app.post("/items/add", itemsControllerCallbacks.addItem);
    app.get("/item/:id", itemsControllerCallbacks.itemDetails);
    app.put("/item/edit", itemsControllerCallbacks.editItem);
    app.delete("/item/delete/:id", itemsControllerCallbacks.deleteItem);
    app.get("/searchresults/:query", itemsControllerCallbacks.searchResults);
};