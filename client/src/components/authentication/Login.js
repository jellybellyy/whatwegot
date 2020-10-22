import React, { useState } from 'react';

function Login(props) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // on change handlers
    // sets the hooks with input values
    const usernameHandler = (e) => { setUsername(e.target.value); setErrorMessage(""); }
    const passwordHandler = (e) => { setPassword(e.target.value); setErrorMessage(""); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { username, password }
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const verify = await response.json();
            if (typeof (verify.result) === "string") {
                setErrorMessage(verify.result);
                setUsername("");
                setPassword("");
            } else {
                // props.history.push("/home");
                window.location = "/items";
            }
        } catch (err) {
            console.log("error at Login submitHandler ===", err.message);
        }
    }

    ///////////////////////////// LOGIN FORM  ////////////////////////////////

    return (
        <div>
            <form onSubmit={submitHandler}>
                Username: <input type="text" value={username} name="username" required onChange={usernameHandler} />
                <br />
                Password: <input type="password" value={password} name="password" required onChange={passwordHandler} />
                <br />
                <input type="submit" value="Log In" />
            </form>
            { errorMessage ? <h5>{errorMessage}</h5> : null}
        </div>
    )
}

export default Login