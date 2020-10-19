// Packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie'

// CSS
import './App.css';

// Components
import Nav from './components/Nav'
import Intro from './components/Intro';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import List from './components/List';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';

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
          {/* {loggedIn ? <Route path="/home" component={Home} /> : null} */}
          <Route path="/list" exact component={List} />
          <Route path="/list/add" component={AddItem} />
          <Route path="/list/edit/:id" component={EditItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
