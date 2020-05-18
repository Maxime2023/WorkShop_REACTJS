import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css'
import Description from './Description';

class App extends Component {
    state = {
    films_list: [],
  }
  componentDidMount() {
    # A completer => chargement de l'API ici #
  }
  render() {
  return (
    <div>
    # A completer => Header #
    <Router>
      <div>
        <Switch>
        <Route path="/about" component={Description}/>
          <Route path="/">
          # A completer => gestion des routes #
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}

export default App
