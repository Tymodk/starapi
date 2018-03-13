
import * as React from 'react';
//import { Link } from 'react-router-dom';


const Movie = (props) => (
    <div class="info">
        <h4>{props.title}</h4> 
        
        <pre>
        	
            <p>Episode: {props.episode_id} </p>
            <p>Opening crawl: {props.opening_crawl} </p>
            <p>Director: {props.director} </p>
            <p>Producer: {props.producer} </p>
            <p>Release date: {props.release_date} </p>
            <p>Characters:</p><pre>{props.characters.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
            <p>Planets:</p><pre>{props.planets.map((character, i) => (            
            character.length === 31 ? <p key={i}><a href={"/planetDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/planetDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
            <p>Species: <pre>{props.species.map((item, i) => (            
                item.length === 31 ? <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre></p>
<p>Owns these vehicles: </p><pre>{props.vehicles.map((item, i) => (            
                item.length === 32 ? <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre>
            <p>Owns these starships:</p><pre> {props.starships.map((item, i) => (            
                item.length === 33 ? <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                              
            ))
    }</pre>
            <p>Created: {props.created} </p>
            <p>Edited: {props.edited} </p>

            {props.url.length === 29 ? <p>Detail: <a href={"/movieDetail/" + props.url.substring(props.url.length - 2)}>{props.title} </a> </p> : <p>Detail: <a href={"/movieDetail/" + props.url.substring(props.url.length - 3)}>{props.title} </a> </p>}
        	
        </pre>  
        </div>  
    
    
);

export default Movie;