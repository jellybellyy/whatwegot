import React, { useState, useEffect } from 'react';

function EditRecipeInstructions({ match, history }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [recipeId] = useState(match.params.id);
    const [instructions, setInstructions] = useState("");

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getInstructions();
    }, []);

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getInstructions = async () => {
        const id = recipeId;
        const results = await fetch(`/recipe/instructions/${id}`);
        const instructions = await results.json();
        setInstructions(instructions.instructions);
    }

    // on change handlers
    // sets the hooks with input values
    const instructionsHandler = (e) => { setInstructions(e.target.value); }

    // on submit handler
    // sends the request to the backend
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { instructions, recipeId }
            const response = await fetch(`/recipe/edit/instructions`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            history.push(`/recipe/${recipeId}`);
        } catch (err) {
            console.log("error at EditRecipeInstructions submitHandler ===", err.message);
        }
    }

    const cancelHandler = () => {
        history.push(`/recipe/${recipeId}`);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Instructions</h2>
                <textarea rows="10" cols="80" value={instructions} required onChange={instructionsHandler} />
                <br /><br />
                <input type="submit" value="Edit" />
                <input type='submit' value="Cancel" onClick={cancelHandler} />
            </form>
        </div>
    )
}

export default EditRecipeInstructions