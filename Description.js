import React, { Component } from 'react';
import './Description.css';

class Description extends Component {

    render() {
        try {
        
        const {film} = this.props.location.film;
        const style = {width: "434px"};
        console.log(film)
        return (
            <div className="DescriptionAll">
                <div className="Poster">
                    <img style={style} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+ film.poster_path}  alt={film.title}></img>
                </div>
            <div className="Text">
                <div>Titre: {film.title}</div>
                <div>Langue originale: {film.original_title}</div>
                <div>Popularité: {film.popularity}</div>
                <div>résumé: {film.overview}</div>
            </div>
            </div>
        );
        }
        catch {
            return <div>s</div>
        }
    }
}


export default Description;