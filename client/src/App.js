// Packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie'

// CSS
import './App.css';

// Components
import Nav from './Components/Nav'

// Authentication Components
import Intro from './Components/Intro';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';

// Item Components
import Items from './Components/Items/Items';
import AddItem from './Components/Items/AddItem';
import EditItem from './Components/Items/EditItem';

// Recipe Components
import Recipes from './Components/Recipes/Recipes';
import AddRecipe from './Components/Recipes/AddRecipe';
import AddRecipeDetails from './Components/Recipes/AddRecipeDetails';
import RecipeDetails from './Components/Recipes/RecipeDetails';
import EditRecipe from './Components/Recipes/EditRecipe';
import EditRecipeIngredient from './Components/Recipes/EditRecipeIngredient';
import EditRecipeIngredients from './Components/Recipes/EditRecipeIngredients';
import EditRecipeInstructions from './Components/Recipes/EditRecipeInstructions';

function App() {

  //////////////////////////////// HOOKS ///////////////////////////////////

  const [loggedIn, setLoggedIn] = useState(false);

  ////////////////////////////// FUNCTIONS /////////////////////////////////

  // check if there's a user logged in
  const authenticate = () => {
    if (Cookies.get('logged_in')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  ////////////////////////  COMPONENT DID MOUNT ////////////////////////////

  useEffect(() => {
    authenticate()
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {loggedIn ? null : <Route path="/" exact component={Intro} />}
          {loggedIn ? null : <Route path="/signup" component={Signup} />}
          {loggedIn ? null : <Route path="/login" component={Login} />}

          <Route path="/items" exact component={Items} />
          <Route path="/item/add" component={AddItem} />
          <Route path="/item/edit/:id" component={EditItem} />

          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipe/add" exact component={AddRecipe} />
          <Route path="/recipe/add/:id" component={AddRecipeDetails} />
          <Route path="/recipe/edit/ingredient/:id" component={EditRecipeIngredient} />
          <Route path="/recipe/edit/ingredients/:id" component={EditRecipeIngredients} />
          <Route path="/recipe/edit/instructions/:id" component={EditRecipeInstructions} />
          <Route path="/recipe/edit/:id" component={EditRecipe} />
          <Route path="/recipe/:id" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
