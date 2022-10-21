import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Games from './components/pages/Games';
import Account from './components/pages/Account';
import Logout from './components/pages/Logout';



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' component={Games} />
        <Route path='/account' component={Account} />
        <Route path='/logout' component={Logout} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;