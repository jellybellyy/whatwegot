// Packages
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function AllRecipes() {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [userId] = useState(Cookies.get('user_id'));
    const [allRecipes, setAllRecipes] = useState([]);

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getAllRecipes();
    }, []);

    //////////////////////////////// STYLE ///////////////////////////////////

    const linkStyle = {
        'textDecoration': 'none',
        color: 'black'
    }

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getAllRecipes = async () => {
        const id = userId;
        const results = await fetch(`/recipes/${id}`)
        const recipes = await results.json();
        setAllRecipes(recipes);
    }

    let recipes = allRecipes.map((item, index) => {
        return (
            <tr key={index}>
                <td><Link style={linkStyle} to={`/recipe/${item.id}`}><h5>{item.name}</h5></Link></td>
                <td>{item.description}</td>
            </tr>
        )
    })

    return (
        // <div>
        //     {recipes}
        // </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes}
                </tbody>
            </table>
        </div>
    )
}

export default AllRecipes