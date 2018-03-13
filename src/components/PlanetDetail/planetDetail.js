import * as React from 'react';
import * as starService from '../../services/star.service';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class planetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {
                    name:'',
                    rotation_period:'',
                    orbital_period:'',
                    diameter:'', 
                    climate:'', 
                    gravity:'',
                    terrain:'',
                    surface_water:'',
                    population:'',
                    residents:'',
                    films:'',
                    created:'',
                    edited:'',
                    url:'',

            }
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getPlanet(this.props.match.params.id).then(response => this.setState({ planet: response }));
    }
   
        
               
    
  
    

    render() {
        return (
            <section>
            
                <div className="wrapper">
                <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a data-toggle="pill" href="#two">Planet: {this.state.planet.name} </a></li>
                </ul>
                <div class="tab-content">  
                 <div id="one" class="tab-pane fade in active">      
                    <ul className="planet">
                    {this.state.planet.name === '' ? (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>) : 
                       <div class="info">
                                                  
                            <pre>
                                <p>Rotation Period: {this.state.planet.rotation_period} </p>
                                <p>Orbital Period: {this.state.planet.orbital_period} </p>
                                <p>Diameter: {this.state.planet.diameter} </p>
                                <p>Climate: {this.state.planet.climate} </p>
                                <p>Gravity: {this.state.planet.gravity} </p>
                                <p>Terrain: {this.state.planet.terrain}</p>
                                <p>Surface Water: {this.state.planet.surface_water} </p>
                                <p>Population: {this.state.planet.population} </p>
                                <p>Famous Residents:</p><pre> {this.state.planet.residents.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
                                <p>Featured in these films: </p><pre>{this.state.planet.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
                                <p>Created at: {this.state.planet.created} </p>
                                <p>Last Edited at: {this.state.planet.edited}</p>
                                
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
        