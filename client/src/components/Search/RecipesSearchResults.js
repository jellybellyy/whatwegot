import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function RecipesSearchResults({ query, backHandler }) {

    //////////////////////////////// HOOKS ///////////////////////////////////

    const [results, setResults] = useState([]);
    const [userId] = useState(Cookies.get('user_id'));

    ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

    useEffect(() => {
        getResults();
    }, [query]);

    //////////////////////////////// STYLE ///////////////////////////////////

    const linkStyle = {
        'textDecoration': 'none',
        color: 'black'
    }

    ////////////////////////////// FUNCTIONS /////////////////////////////////

    const getResults = async () => {
        let id = userId
        let searchQuery = query;
        const results = await fetch(`/recipessearchresults/${id}/${searchQuery}`);
        const searchResults = await results.json();
        console.log(searchResults);
        setResults(searchResults);
    }

    // let searchResults = results.map((item, index) => {
    //     return (
    //         <div key={index}>
    //             <Link style={linkStyle} to={`/recipe/${item.id}`}><h2>{item.name}</h2></Link>
    //             <br />
    //             {item.description}
    //         </div>
    //     )
    // })

    let searchResults = results.map((item, index) => {
        return (
            <tr key={index}>
                <td><Link style={linkStyle} to={`/recipe/${item.id}`}><h5>{item.name}</h5></Link></td>
                <td>{item.description}</td>
            </tr>
        )
    })

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults}
                </tbody>
            </table>
            <button onClick={backHandler}>Back</button>
        </div>
    )

}

export default RecipesSearchResults