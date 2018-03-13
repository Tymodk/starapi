
import * as React from 'react';
//import { Link } from 'react-router-dom';

const People = (props) => (
    <div class="info">
        <h4>{props.name}</h4> 
        
        <pre>
        	<p>Height: {props.height} </p>
        	<p>Mass: {props.mass} </p>
        	<p>Hair color: {props.hair_color} </p>
        	<p>Skin color: {props.skin_color} </p>
        	<p>Eye color: {props.eye_color} </p>
        	<p>Birth year: {props.birth_year}</p>
        	<p>Gender: {props.gender} </p>
            <p>Homeworld: {props.homeworld.length === 31 ? <p><a href={"/planetDetail/" + props.homeworld.substring(props.homeworld.length - 2)}>{props.homeworld} </a> </p> : <p><a href={"/planetDetail/" + props.homeworld.substring(props.homeworld.length - 3)}>{props.homeworld} </a> </p>}</p>
        	
        	<p>Species: <pre>{props.species.map((item, i) => (            
                item.length === 31 ? <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre></p>
        	<p>Featured in these films: </p><pre>{props.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
        	<p>Owns these vehicles: </p><pre>{props.vehicles.map((item, i) => (            
                item.length === 32 ? <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre>
        	<p>Owns these starships:</p><pre> {props.starships.map((item, i) => (            
                item.length === 33 ? <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                              
            ))
    }</pre>
        	<p>Created at: {props.created} </p>
        	<p>Last Edited at: {props.edited}</p>
            {props.url.length === 30 ? <p>Detail: <a href={"/peopleDetail/" + props.url.substring(props.url.length - 2)}>{props.name} </a> </p> : <p>Detail: <a href={"/peopleDetail/" + props.url.substring(props.url.length - 3)}>{props.name} </a> </p>}
        	
        </pre>  
        </div>  
    
    
);

export default People;