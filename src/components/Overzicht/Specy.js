import * as React from 'react';
//import { Link } from 'react-router-dom';

const Specy = (props) => (
    <div class="info">
        <h4>{props.name}</h4> 
        
        <pre>
            <p>Classification: {props.classification}</p>
            <p>Designation: {props.designation}</p>
            <p>Average height: {props.average_height}</p>
            <p>Possible skin colors: {props.skin_colors}</p>
            <p>Possible hair colors: {props.hair_colors}</p>
            <p>Possible eye colors: {props.eye_colors}</p>
            <p>Average lifespan: {props.average_lifespan}</p>
            <p>Homeworld: {props.homeworld.length === 31 ? <p><a href={"/planetDetail/" + props.homeworld.substring(props.homeworld.length - 2)}>{props.homeworld} </a> </p> : <p><a href={"/planetDetail/" + props.homeworld.substring(props.homeworld.length - 3)}>{props.homeworld} </a> </p>}</p>
            <p>Language: {props.language}</p>
            <p>Famous members of this species: </p><pre>{props.people.length === 0 ? <p>No famous people of this species</p> : props.people.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
            <p>Featured in these films: </p><pre>{props.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
            <p>Created at: {props.created} </p>
            <p>Last Edited at: {props.edited}</p>
            {props.url.length === 31 ? <p>Detail: <a href={"/speciesDetail/" + props.url.substring(props.url.length - 2)}>{props.name} </a> </p> : <p>Details: <a href={"/speciesDetail/" + props.url.substring(props.url.length - 3)}>{props.name} </a> </p>}
            
        </pre>  
        </div>  
    
    
);

export default Specy;