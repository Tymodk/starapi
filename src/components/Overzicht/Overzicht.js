import * as React from 'react';
import * as starService from '../../services/star.service';
import Planet from './Planet'
import People from './People'
import Movie from './Movie'
import Vehicle from './Vehicle'
import Starship from './Starship'
import Specy from './Specy'
import Form from './Form'
import CustomPlanet from './CustomPlanet'
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            people: [],
            movies: [],
            vehicles: [],
            starships: [],
            species: [],
            customplanets: [],
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getPlanets().then(response => this.setState({ planets: response.results }));
        starService.getPeople().then(response => this.setState({ people: response.results }));
        starService.getMovies().then(response => this.setState({ movies: response.results }));
        starService.getVehicles().then(response => this.setState({ vehicles: response.results }));
        starService.getStarships().then(response =>  this.setState({ starships: response.results }));
        starService.getSpecies().then(response => this.setState({ species: response.results }));
        starService.getCustomPlanets().then(response =>  this.setState({ customplanets: response }));

    }
    renderPlanets() {

        return this.state.planets.map((planet, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                    <Planet name={planet.name} rotation_period={planet.rotation_period} orbital_period={planet.orbital_period} diameter={planet.diameter} climate={planet.climate} gravity={planet.gravity} terrain={planet.terrain} surface_water={planet.surface_water} population={planet.population} residents={planet.residents} films={planet.films} created={planet.created} edited={planet.edited} url={planet.url} />
                </div>                      
            </div>));
    }
    renderPeople(){
        return this.state.people.map((people, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                    <People name={people.name} height={people.height} mass={people.mass} hair_color={people.hair_color} skin_color={people.skin_color} eye_color={people.eye_color} birth_year={people.birth_year} gender={people.gender} homeworld={people.homeworld} species={people.species} films={people.films} vehicles={people.vehicles} starships={people.starships} created={people.created} edited={people.edited} url={people.url} />
                </div>                      
            </div>));
    }
    renderMovies(){
        return this.state.movies.map((movie, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                <Movie title={movie.title} episode_id={movie.episode_id} opening_crawl={movie.opening_crawl} director={movie.director} producer={movie.producer} release_date={movie.release_date} characters={movie.characters} planets={movie.planets} starships={movie.starships} vehicles={movie.vehicles} species={movie.species} created={movie.created} edited={movie.edited} url={movie.url} />
                </div>                      
            </div>));
    }
    renderVehicles(){
        return this.state.vehicles.map((vehicle, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                <Vehicle name={vehicle.name} model={vehicle.model} manufacturer={vehicle.manufacturer} cost_in_credits={vehicle.cost_in_credits} length={vehicle.length} max_atmosphering_speed={vehicle.max_atmosphering_speed} crew={vehicle.crew} passengers={vehicle.passengers} cargo_capacity={vehicle.cargo_capacity} consumables={vehicle.consumables} vehicle_class={vehicle.vehicle_class} pilots={vehicle.pilots} films={vehicle.films} created={vehicle.created} edited={vehicle.edited} url={vehicle.url} />
                </div>                      
            </div>));
    }
    renderStarships(){
        return this.state.starships.map((starship, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                    <Starship name={starship.name} model={starship.model} manufacturer={starship.manufacturer} cost_in_credits={starship.cost_in_credits} length={starship.length} max_atmosphering_speed={starship.max_atmosphering_speed} crew={starship.crew} passengers={starship.passengers} cargo_capacity={starship.cargo_capacity} consumables={starship.consumables} hyperdrive_rating={starship.hyperdrive_rating} MGLT={starship.MGLT} starship_class={starship.starship_class} pilots={starship.pilots} films={starship.films} created={starship.created} edited={starship.edited} url={starship.url} />

                </div>                      
            </div>));
    }
    renderSpecies(){
        return this.state.species.map((specy, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                    <Specy name={specy.name} classification={specy.classification} designation={specy.designation} average_height={specy.average_height} skin_colors={specy.skin_colors} hair_colors={specy.hair_colors} eye_colors={specy.eye_colors} average_lifespan={specy.average_lifespan} homeworld={specy.homeworld} language={specy.language} people={specy.people} films={specy.films} created={specy.created} edited={specy.edited} url={specy.url} />
                </div>                      
            </div>));
    }
    renderCustomPlanets(){
        return this.state.customplanets.map((customplanet, i) => (
            <div class="list-group-item todo">
                <div key={i}>
                    <CustomPlanet name={customplanet.name} description={customplanet.description} rotation_period={customplanet.rotation_period} orbital_period={customplanet.orbital_period} diameter={customplanet.diameter} gravity={customplanet.gravity} terrain={customplanet.terrain} surface_water={customplanet.surface_water} population={customplanet.population} climate={customplanet.climate} Created_date={customplanet.Created_date} _id={customplanet._id} />
                </div>                      
            </div>));
    }
    

    render() {
        return (
            <section>
            
                <div className="wrapper">  
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="pill" href="#one"><span class="swg swg-deathstar-4 swg-3x"></span> Planets</a></li>
                        <li><a data-toggle="pill" href="#two"> <span class="swg swg-darthvader-5 swg-3x"></span> People</a></li>
                        <li><a data-toggle="pill" href="#three"> <span class="swg swg-swtrilogy swg-3x"></span> Movies</a></li>
                        <li><a data-toggle="pill" href="#four"> <span class="swg swg-speederbike swg-3x"></span> Vehicles</a></li>
                        <li><a data-toggle="pill" href="#five"> <span class="swg swg-falcon swg-3x"></span> Starships</a></li>
                        <li><a data-toggle="pill" href="#six"> <span class="swg swg-akbar swg-3x"></span> Species</a></li>
                        <li><a data-toggle="pill" href="#seven"> <span class="swg swg-decals-1 swg-3x"></span> Custom planets</a></li>
                        <li><a data-toggle="pill" href="#eight"> <span class="swg swg-decals-4 swg-3x"></span> Make your own planet</a></li>

                      </ul>
                      
                      <div class="tab-content">
                        <div id="one" class="tab-pane fade in active">
                           <ul className="planets">
                              {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderPlanets() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}
                           </ul>
                        </div>
                        <div id="two" class="tab-pane fade">
                         <ul className="People">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderPeople() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}
                         </ul>
                        </div>
                        <div id="three" class="tab-pane fade">
                          <ul className="Movies">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderMovies() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}                                                         
                          </ul>
                        </div>
                        <div id="four" class="tab-pane fade">
                          <ul className="Vehicles">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderVehicles() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}                                                         
                          
                          </ul>
                        </div>
                        <div id="five" class="tab-pane fade">
                          <ul className="Starships">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderStarships() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}                                                         
                                                     
                          </ul>
                        </div>
                        <div id="six" class="tab-pane fade">
                          <ul className="Species">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderSpecies() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}                                                         

                          </ul>
                        </div>
                        <div id="seven" class="tab-pane fade">
                          <ul className="Customplanets">
                            {this.state.planets.length && this.state.people.length && this.state.movies.length && this.state.vehicles.length && this.state.starships.length && this.state.species.length ? this.renderCustomPlanets() : (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>)}                                                         
                            
                          </ul>
                        </div>
                        <div id="eight" class="tab-pane fade">
                          <ul className="Movies">
                          <div class="list-group-item todo">
                            <Form />    
                           </div>                                                      
                          </ul>
                        </div>
                      </div>
                    </div>
                
            </section>);
    }
};
        