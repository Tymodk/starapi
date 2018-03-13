import * as React from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as starService from '../../services/star.service';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {
                name: '',
                description: '',
                rotation_period: '',
                orbital_period: '',
                diameter: '',
                gravity: '',
                terrain: '',
                surface_water: '',
                population: '',
                climate: '', 
                         
            },
        nameError: '',
        descriptionError: '',
        rotation_periodError: '',
        orbital_periodError: '',
        diameterError: '',
        gravityError: '',
        terrainError: '',
        surface_waterError: '',
        populationError: '',
        climateError: '',     
        };
    }

    updateName(name) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                name: `${name}`,
            }
        });
    }

    updateDescription(description) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                description: `${description}`,
            }
        });
    }
    updateRotationPeriod(rotation_period) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                rotation_period: `${rotation_period}`,
            }
        });
    }
    updateOrbitalPeriod(orbital_period) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                orbital_period: `${orbital_period}`,
            }
        });
    }
    updateDiameter(diameter) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                diameter: `${diameter}`,
            }
        });
    }
    updateGravity(gravity) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                gravity: `${gravity}`,
            }
        });
    }
    updateTerrain(terrain) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                terrain: `${terrain}`,
            }
        });
    }
    updateSurfaceWater(surface_water) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                surface_water: `${surface_water}`,
            }
        });
    }
    updatePopulation(population) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                population: `${population}`,
            }
        });
    }
    updateClimate(climate) {
        this.setState({
            ...this.state,
            planet: {
                ...this.state.planet,
                climate: `${climate}`,
            }
        });
    }
    validate = () => {
    let isError = false;
    const errors = {
        nameError: '',
        descriptionError: '',
        rotation_periodError: '',
        orbital_periodError: '',
        diameterError: '',
        gravityError: '',
        terrainError: '',
        surface_waterError: '',
        populationError: '',
        climateError: '',  
    };

    if (this.state.planet.name.length < 3) {
      isError = true;
      errors.nameError = "Planet name needs to be atleast 3 characters long";
    }
    if (this.state.planet.terrain.length < 4) {
      isError = true;
      errors.terrainError = "Planet terrain needs to be atleast 4 characters long";
    }
    if (this.state.planet.climate.length < 4) {
      isError = true;
      errors.climateError = "Planet climate needs to be atleast 4 characters long";
    }
    if (this.state.planet.description.length < 10) {
      isError = true;
      errors.descriptionError = "Planet description needs to be atleast 10 characters long";
    }
    if (this.state.planet.rotation_period.length < 1) {
      isError = true;
      errors.rotation_periodError = "Planet rotation period needs to not be blank";
    }    
    if (this.state.planet.rotation_period.length >= 1 && isNaN(this.state.planet.rotation_period)) {
      isError = true;
      errors.rotation_periodError = "Planet rotation period needs to be a number";
    }   
    if (this.state.planet.orbital_period.length < 1) {
      isError = true;
      errors.orbital_periodError = "Planet orbital period needs to not be blank";
    }    
    if (this.state.planet.orbital_period.length >= 1 && isNaN(this.state.planet.orbital_period)) {
      isError = true;
      errors.orbital_periodError = "Planet orbital period needs to be a number";
    }  
    if (this.state.planet.diameter.length < 1) {
      isError = true;
      errors.diameterError = "Planet diameter needs to not be blank";
    }    
    if (this.state.planet.diameter.length >= 1 && isNaN(this.state.planet.diameter)) {
      isError = true;
      errors.diameterError = "Planet diameter needs to be a number";
    }  
    if (this.state.planet.gravity.length < 1) {
      isError = true;
      errors.gravityError = "Planet gravity needs to not be blank";
    }    
    if (this.state.planet.gravity.length >= 1 && isNaN(this.state.planet.gravity)) {
      isError = true;
      errors.gravityError = "Planet gravity needs to be a number";
    }   

    if (this.state.planet.surface_water.length < 1 || isNaN(this.state.planet.surface_water) ) {
      isError = true;
      errors.surface_waterError = "Planet surface water percentage needs to be a number & not blank.";
      if(this.state.planet.surface_water < 0 && this.state.planet.surface_water > 100){errors.surface_waterError = "Planet surface water percentage needs to be a number between 0-100."}
    }    
    
    if (this.state.planet.population.length < 1) {
      isError = true;
      errors.populationError = "Planet population needs to not be blank";
    }    
    if (this.state.planet.population.length >= 1 && isNaN(this.state.planet.population)) {
      isError = true;
      errors.populationError = "Planet population needs to be a number";
    }  

      
      
      


    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
};

       onSubmit(e) {
        e.preventDefault(); // stop default form submit
        const err = this.validate();
        if(!err){
        starService.addCustomPlanet(this.state.planet);
        this.setState({ 

            planet: {
                name: '',
                description: '',
                rotation_period: '',
                orbital_period: '',
                diameter: '',
                gravity: '',
                terrain: '',
                surface_water: '',
                population: '',
                climate: '', 
                         
            },
        nameError: '',
        descriptionError: '',
        rotation_periodError: '',
        orbital_periodError: '',
        diameterError: '',
        gravityError: '',
        terrainError: '',
        surface_waterError: '',
        populationError: '',
        climateError: '',      

        })

        }

    }

 

    
    render() {
        return (
            
                    <main>
                        <div className="wrapper">                           
                        <MuiThemeProvider>
                            <form>                              
                                
                                <TextField name="name" hintText="Planet name" floatingLabeltText="name" value={this.state.planet.name} onChange={(e) => this.updateName(e.target.value)} type="name"  errorText={this.state.nameError} floatingLabelFixed />   <br />                      
                                <TextField name="description" hintText="Description" floatingLabeltText="description" value={this.state.planet.description} onChange={(e) => this.updateDescription(e.target.value)} type="description"  errorText={this.state.descriptionError} floatingLabelFixed /> <br />                       
                                <TextField name="rotation_period" hintText="Rotation period (hours/day)" floatingLabeltText="rotation_period" value={this.state.planet.rotation_period} onChange={(e) => this.updateRotationPeriod(e.target.value)} type="rotation_period"  errorText={this.state.rotation_periodError} floatingLabelFixed />  <br />                      
                                <TextField name="orbital_period" hintText="Orbital period (days/year)" floatingLabeltText="orbital_period" value={this.state.planet.orbital_period} onChange={(e) => this.updateOrbitalPeriod(e.target.value)} type="orbital_period"  errorText={this.state.orbital_periodError} floatingLabelFixed />   <br />                     
                                <TextField name="diameter" hintText="Diameter" floatingLabeltText="diameter" value={this.state.planet.diameter} onChange={(e) => this.updateDiameter(e.target.value)} type="diameter"  errorText={this.state.diameterError} floatingLabelFixed />          <br />              
                                <TextField name="gravity" hintText="Gravity" floatingLabeltText="gravity" value={this.state.planet.gravity} onChange={(e) => this.updateGravity(e.target.value)} type="gravity"  errorText={this.state.gravityError} floatingLabelFixed/>    <br />                    
                                <TextField name="terrain" hintText="Terrain" floatingLabeltText="terrain" value={this.state.planet.terrain} onChange={(e) => this.updateTerrain(e.target.value)} type="terrain"  errorText={this.state.terrainError} floatingLabelFixed />     <br />                   
                                <TextField name="surface_water" hintText="Surface water %" floatingLabeltText="surface_water" value={this.state.planet.surface_water} onChange={(e) => this.updateSurfaceWater(e.target.value)} type="surface_water"  errorText={this.state.surface_waterError} floatingLabelFixed />   <br />                     
                                <TextField name="population" hintText="Population" floatingLabeltText="population" value={this.state.planet.population} onChange={(e) => this.updatePopulation(e.target.value)} type="population"  errorText={this.state.populationError} floatingLabelFixed />     <br />                   
                                <TextField name="climate" hintText="Climate" floatingLabeltText="climate" value={this.state.planet.climate} onChange={(e) => this.updateClimate(e.target.value)} type="climate"  errorText={this.state.climateError} floatingLabelFixed />      <br />                     
                                <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
                            </form>
                        </MuiThemeProvider>    
                        </div>
                    </main>     
            );
    };
}
