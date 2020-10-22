// Packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie'

// CSS
import './App.css';

// Components
import Nav from './components/Nav'

// Authentication Components
import Intro from './components/Intro';
// import Register from './components/Authentication/Register';
// import Login from './components/Authentication/Login';

// Item Components
import Items from './components/Items/Items';
import AddItem from './components/Items/AddItem';
import EditItem from './components/Items/EditItem';

// Recipe Components
import Recipes from './components/Recipes/Recipes';
import AddRecipe from './components/Recipes/AddRecipe';
import AddRecipeDetails from './components/Recipes/AddRecipeDetails';
import RecipeDetails from './components/Recipes/RecipeDetails';
import EditRecipe from './components/Recipes/EditRecipe';
import EditRecipeIngredient from './components/Recipes/EditRecipeIngredient';
import EditRecipeIngredients from './components/Recipes/EditRecipeIngredients';
import EditRecipeInstructions from './components/Recipes/EditRecipeInstructions';

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
          {/* {loggedIn ? null : <Route path="/signup" component={Register} />}
          {loggedIn ? null : <Route path="/login" component={Login} />} */}

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
