import * as React from 'react';
import * as starService from '../../services/star.service';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class VehicleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: {
                    name:'',
                    pilots:'',
                    films:'',                    

            }
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getVehicle(this.props.match.params.id).then(response => this.setState({ vehicle: response }));
    }
   
        
               
    
  
    

    render() {
        return (
            <section>
            
                <div className="wrapper">
                <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a data-toggle="pill" href="#two">Vehicle: {this.state.vehicle.name} </a></li>
                </ul>
                <div class="tab-content">  
                 <div id="one" class="tab-pane fade in active">      
                    <ul className="vehicle">
                    {this.state.vehicle.name === '' ? (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>) : 
                       <div class="info">
                                                  
                            <pre>
                                <p>Model: {this.state.vehicle.model}</p>
                                <p>Manufacturer: {this.state.vehicle.manufacturer}</p>
                                <p>Cost in credits: {this.state.vehicle.cost_in_credits}</p>
                                <p>Length of the vehicle: {this.state.vehicle.length}</p>
                                <p>Maximum atmos. speed: {this.state.vehicle.max_atmosphering_speed}</p>
                                <p>Crew capacity: {this.state.vehicle.crew}</p>
                                <p>Passenger capacity: {this.state.vehicle.passengers}</p>
                                <p>Cargo capacity: {this.state.vehicle.cargo_capacity}</p>
                                <p>Rations: {this.state.vehicle.consumables}</p>
                                <p>Vehicle class: {this.state.vehicle.vehicle_class}</p>
                                <p>Famous pilots: </p><pre>{this.state.vehicle.pilots.length === 0 ? <p>No famous pilots that drive this vehicle</p> : this.state.vehicle.pilots.map((character, i) => (            
                                character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                                    
                                ))}</pre>
                                <p>Featured in these films: </p><pre>{this.state.vehicle.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
                                <p>Created at: {this.state.vehicle.created} </p>
                                <p>Last Edited at: {this.state.vehicle.edited}</p>
                                
                            </pre>  
                        </div>  
                        }
                    </ul> 
                    </div>  
                    </div>                        
                </div>
            </section>);
    }
};
        