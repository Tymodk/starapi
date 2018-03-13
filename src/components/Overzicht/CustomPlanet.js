
import * as React from 'react';
//import { Link } from 'react-router-dom';

const CustomPlanet = (props) => (
    <div class="info">
        <h4>{props.name}</h4> 
        
        <pre>
            <p>Description:</p><p>{props.description}</p>
            <p>Rotation period: {props.rotation_period}</p>
            <p>Orbital period: {props.orbital_period}</p>
            <p>Diameter: {props.diameter}</p>
            <p>Gravity: {props.gravity}</p>
            <p>Terrain: {props.terrain}</p>
            <p>Surface water percentage: {props.surface_water}</p>
            <p>Population: {props.population}</p>
            <p>Climate: {props.climate}</p>
            <p>Created on: {props.Created_date}</p>
            <p>Edit: <a href={ "/CustomDetail/" + props._id}>{props.name}</a></p>
        </pre>  
        </div>  
    
    
);

export default CustomPlanet;