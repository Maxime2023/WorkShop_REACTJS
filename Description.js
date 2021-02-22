import React, { Component } from 'react';
import './Description.css'
class Description extends Component {
    state = {
        filmDescription: "",
      }
    componentDidMount() {
        this.setState({filmDescription: this.props.location.film.film})
    }
    render() {
        console.log(this.state.filmDescription)
        const style = {width: "300px"};
        return (
            <div>
                {Object.keys(this.state.filmDescription).length === 0 ? <div>chargement</div> : 
                <div className="Wrapper">
                    <img style={style} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+ this.state.filmDescription.poster_path}  alt={this.state.filmDescription.title}></img>
                    <div><h1>Titre :</h1> {this.state.filmDescription.original_title}</div>
                    <div><h1>Description : </h1>{this.state.filmDescription.overview}</div>
                    <div><h1>Date de sortie : </h1>{this.state.filmDescription.release_date}</div>
                    <div><h1>Popularité :</h1>{this.state.filmDescription.popularity}</div>
                    
                </div>
                }
            </div>

        );
    }
}

export default Description;
