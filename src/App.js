import React, { Component, Fragment } from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Main/NavBar';
import Catalog from './components/Catalog/view';
import Details from './components/Details';
import NotFound from "./components/Main/NotFound";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/productos" component={Catalog} />
          <Route path="/productos/:id" component={Details} />
          <Redirect from="/" to="productos" />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;