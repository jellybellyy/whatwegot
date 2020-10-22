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
            <div key={index}>
                <Link style={linkStyle} to={`/recipe/${item.id}`}><h2>{item.name}</h2></Link>
                <br />
                {item.description}
                <br /><br />
            </div>
        )
    })

    return (
        <div>
            {recipes}
        </div>
    )
}

export default AllRecipes