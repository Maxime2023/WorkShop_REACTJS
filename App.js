import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css'
// Ne pas oublier de créer le fichier Description.js import Description from './Description';

class App extends Component {
    state = {
    films_list: [],
  }
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4d4ed145d3584846f5922b6a467e1f85`)
      .then(res => {
        const films_list = res.data.results;
        this.setState({ films_list });
      })
  }
  render() {
  const style = {width: "200px"};
  return (
    <div>
      <div className="header">
        REACTJS WORKSHOP
      </div>
    <Router>
      <div>
        <Switch>
        {/* Ne pas oublier de créer le fichier Description.js <Route path="/about" component={Description}/> */}
          <Route path="/">
           <div className="flex-row-container">
                 {this.state.films_list.map(film => 
                    <div>
                        <div>
                            <Link to={{ pathname: "/about", film: {film}}} ><img style={style} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+ film.poster_path}  alt={film.title}></img></Link>
                        </div>
                        <div>
                            {film.title.slice(0, 20)}
                        </div>
                    </div>
                )}
             </div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
}


export default App
