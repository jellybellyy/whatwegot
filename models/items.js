module.exports = (dbPoolInstance) => {

    const getAllItems = (userId, callback) => {

        let query = `SELECT * FROM items WHERE user_id = '${userId}' ORDER BY expiry_date ASC `

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getAllItems ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getAddItem = (name, quantity, purchaseDate, expiryDate, description, userId, callback) => {

        let query = `INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES (INITCAP($$${name}$$), INITCAP($$${quantity}$$), '${purchaseDate}', '${expiryDate}', $$${description}$$, '${userId}')`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getAddItem ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getItemDetails = (itemId, callback) => {

        let query = `SELECT * FROM items WHERE id = ${itemId}`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getItemDetails ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getEditItem = (name, quantity, purchaseDate, expiryDate, description, itemId, callback) => {

        let query = `UPDATE items SET name = INITCAP($$${name}$$), quantity = INITCAP($$${quantity}$$), purchase_date = '${purchaseDate}', expiry_date = '${expiryDate}', description = $$${description}$$ WHERE id = '${itemId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getEditItem ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getDeleteItem = (itemId, callback) => {

        let query = `DELETE FROM items WHERE id = '${itemId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getDeleteItem ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })
    }

    const getSearchResults = (userId, searchQuery, callback) => {

        let query = `SELECT * FROM items WHERE lower(name) LIKE lower($$%${searchQuery}%$$) AND user_id = '${userId}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("Error at items model, getSearchResults ===", err.message);
                callback(null, null);
            }
            else {
                callback(null, result);
            }
        })

    }

    return {
        getAllItems,
        getAddItem,
        getItemDetails,
        getEditItem,
        getDeleteItem,
        getSearchResults
    }

}