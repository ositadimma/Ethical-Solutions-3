import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Strapi from './Strapi';
import Successful from './Successful';
import Destination from './Destination';
import Destinationdetails from './Destinationdetails';
import Login from './Login';
import Logout from './Logout';
import Trial from './Trial';


import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


axios.get('http://localhost:1337/restaurants').then(response => {
  console.log(response);
});



function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Login />
            <Logout />
          </Route>
          <Route path="/strapi">
            <Strapi />
          </Route>
          <Route path="/trial">
            <Trial/>
          </Route>
          <Route path="/success">
            <Successful />
          </Route>
          
          <Route path="/destination/:id">
            <Destinationdetails />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
