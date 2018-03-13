import * as React from 'react';
//import { Link } from 'react-router-dom';

const Planet = (props) => (
    <div class="info">
        <h4>{props.name}</h4> 
        
        <pre>
            <p>Rotation Period: {props.rotation_period} </p>
            <p>Orbital Period: {props.orbital_period} </p>
            <p>Diameter: {props.diameter} </p>
            <p>Climate: {props.climate} </p>
            <p>Gravity: {props.gravity} </p>
            <p>Terrain: {props.terrain}</p>
            <p>Surface Water: {props.surface_water} </p>
            <p>Population: {props.population} </p>
            <p>Famous Residents: </p><pre>{props.residents.length === 0 ? <p>No famous residents from this planet</p> : props.residents.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
            <p>Featured in these films: </p><pre>{props.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
            <p>Created at: {props.created} </p>
            <p>Last Edited at: {props.edited}</p>
            {props.url.length === 31 ? <p>Detail: <a href={"/planetDetail/" + props.url.substring(props.url.length - 2)}>{props.name} </a> </p> : <p>Details: <a href={"/planetDetail/" + props.url.substring(props.url.length - 3)}>{props.name} </a> </p>}
            
        </pre>  
        </div>  
    
    
);

export default Planet;