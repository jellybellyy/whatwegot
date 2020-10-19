const sha256 = require('js-sha256');
const SALT = "nappa";

module.exports = (db) => {

    const signup = (req, res) => {

        console.log("signup controller triggered");

        let { firstName, lastName, username, password } = req.body;
        password = sha256(password + SALT);

        db.users.getSignup(firstName, lastName, username, password, (err, result) => {
            if (err) {
                console.log("error at users controller, signup ===", err.message);
            }
            else {
                if (typeof (result) === "string") {
                    res.send({ result });
                }
                else {
                    console.log(result.rows);

                    res.cookie("username", result.rows[0].username);
                    res.cookie("user_id", result.rows[0].id);
                    res.cookie("logged_in", true);

                    res.send(result.rows)
                }
            }
        })
    }

    const login = (req, res) => {

        console.log("login controller triggered");

        let { username, password } = req.body;
        password = sha256(password + SALT);

        db.users.getLogin(username, password, (err, result) => {
            if (err) {
                console.log("error at user controller, login ===", err.message);
            }
            else {
                if (typeof (result) === "string") {
                    res.send({ result });
                }
                else {
                    console.log(result.rows);

                    res.cookie("username", result.rows[0].username);
                    res.cookie("user_id", result.rows[0].id);
                    res.cookie("logged_in", true);

                    res.send(result.rows)
                }
            }
        })
    }

    return {
        signup,
        login
    }

}