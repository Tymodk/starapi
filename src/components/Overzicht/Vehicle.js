import * as React from 'react';
//import { Link } from 'react-router-dom';

const Vehicle = (props) => (
    <div class="info">
        <h4>{props.name}</h4> 

        <pre>
            <p>Model: {props.model}</p>
            <p>Manufacturer: {props.manufacturer}</p>
            <p>Cost in credits: {props.cost_in_credits}</p>
            <p>Length of the vehicle: {props.length}</p>
            <p>Maximum atmos. speed: {props.max_atmosphering_speed}</p>
            <p>Crew capacity: {props.crew}</p>
            <p>Passenger capacity: {props.passengers}</p>
            <p>Cargo capacity: {props.cargo_capacity}</p>
            <p>Rations: {props.consumables}</p>
            <p>Vehicle class: {props.vehicle_class}</p>
            <p>Famous pilots: </p><pre>{props.pilots.length === 0 ? <p>No famous pilots that drive this vehicle</p> : props.pilots.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
            <p>Featured in these films: </p><pre>{props.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
            <p>Created at: {props.created} </p>
            <p>Last Edited at: {props.edited}</p>
            {props.url.length === 32 ? <p>Detail: <a href={"/vehicleDetail/" + props.url.substring(props.url.length - 2)}>{props.name} </a> </p> : <p>Details: <a href={"/vehicleDetail/" + props.url.substring(props.url.length - 3)}>{props.name} </a> </p>}
            
        </pre>  
        </div>  
    
    
);

export default Vehicle;