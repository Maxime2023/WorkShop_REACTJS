import React, { Component } from 'react';
// créer le fichier Description.css import './Description.css'
class Description extends Component {
    state = {
        filmDescription: "",
      }
    componentDidMount() {
        this.setState({filmDescription: this.props.location.film.film});
        //on met à jour la variable filmDescription, avec les props que nous envoient le composant parent (App.js)  =>this.props correspond à ce que "recoit en parametre" Description.js
        console.log(this.state.filmDescription);
        //permet d'afficher dans la console ce que contient this.state.filmDescription
    }
    render() {
        return (
            <div>Description</div>
        );
    }
}

export default Description;
