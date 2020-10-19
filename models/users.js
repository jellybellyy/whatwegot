module.exports = (dbPoolInstance) => {

    const getSignup = (firstName, lastName, username, password, callback) => {

        // prevents multiple entries with the same username
        let query = `INSERT INTO users (first_name, last_name, username, password) SELECT '${firstName}', '${lastName}', '${username}', '${password}' WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = '${username}') RETURNING *`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("error at users model, getSignup ===", err.message);
                callback(null, null);
            }
            else {
                if (result.rows.length > 0) {
                    callback(null, result);
                } else {
                    callback(null, "username taken, please choose something else!")
                }
            }
        })
    }

    const getLogin = (username, password, callback) => {
        let query = `SELECT * FROM users WHERE username = '${username}'`

        dbPoolInstance.query(query, (err, result) => {
            if (err) {
                console.log("error at user model, getLogin ===", err.message);
                callback(null, null);
            }
            else {
                if (result.rows.length > 0) {
                    if (`${password}` === result.rows[0].password) {
                        callback(null, result);
                    } else {
                        callback(null, "wrong password!");
                    }
                }
                else {
                    callback(null, "user does not exist!");
                }
            }
        })
    }

    return {
        getSignup,
        getLogin
    }

}