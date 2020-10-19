import React, { useState } from 'react';

function Signup(props) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    // on change handlers
    // sets the hooks with input values
    const firstNameHandler = (e) => { setFirstName(e.target.value); setErrorMessage(""); }
    const lastNameHandler = (e) => { setLastName(e.target.value); setErrorMessage(""); }
    const usernameHandler = (e) => { setUsername(e.target.value); setErrorMessage(""); }
    const passwordHandler = (e) => { setPassword(e.target.value); setErrorMessage(""); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, username, password }
            const response = await fetch("/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const verify = await response.json();
            if (typeof (verify.result) === "string") {
                setErrorMessage(verify.result);
                setFirstName("");
                setLastName("");
                setUsername("");
                setPassword("");
            } else {
                // props.history.push("/home");
                window.location = "/list";
            }
        } catch (err) {
            console.log("error at Signup submitHandler ===", err.message);
        }
    }

    ///////////////////////////// SIGNUP FORM  ///////////////////////////////

    return (
        <div>
            <form onSubmit={submitHandler}>
                First Name: <input type='text' value={firstName} required onChange={firstNameHandler} />
                <br />
                Last Name: <input type='text' value={lastName} required onChange={lastNameHandler} />
                <br />
                Username: <input type='text' value={username} minLength="6" required onChange={usernameHandler} />
                <br />
                Password: <input type='password' value={password} minLength="8" required onChange={passwordHandler} />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
            {errorMessage ? <h5>{errorMessage}</h5> : null}
        </div>
    )
}

export default Signup