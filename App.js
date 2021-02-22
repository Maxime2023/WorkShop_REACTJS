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
      //variable propre au composant ex: arrayOfMovies
  }
  componentDidMount() {
    axios.get("///urlAPI///")
      .then(res => {
        ////stocker le resultat dans la variable composant
      })
  }
  render() {
  return (
    <div>
    {/* debut rooter */}
      <div>
        {/* debut switch */}
        {/* 1ere route appelle le fichier Description.js */}
          {/* debut 2eme route */}
           <div className="flex-row-container">
             {/* la fonction map permet de prendre chaque elements d'un tableau et de les traiter un par un */}
                 {this.state.films_list.map(film => 
                    <div>
                        <div>
                            {/* image du film, syntaxe particuliere a respecter*/}
                        </div>
                        <div>
                            {/* titre du film  */}
                        </div>
                    </div>
                )}
             </div>
          {/* fin 2eme route */}
        {/* fin du du switch */}
      </div>
    {/* fin rooter */}
    </div>
  );
}
}


export default App