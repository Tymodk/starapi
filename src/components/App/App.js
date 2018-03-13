import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Overzicht from '../Overzicht/Overzicht'
import planetDetail from '../PlanetDetail/planetDetail'
import PeopleDetail from '../PeopleDetail/PeopleDetail'
import MovieDetail from '../MovieDetail/MovieDetail'
import StarshipDetail from '../StarshipDetail/StarshipDetail'
import VehicleDetail from '../VehicleDetail/VehicleDetail'
import SpeciesDetail from '../SpeciesDetail/SpeciesDetail'
import CustomDetail from '../CustomDetail/CustomDetail'
import Anim from '../Anim/Anim'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />        
        <Route exact path='/' component={Overzicht} /> 
        <Route exact path='/planetDetail/:id' component={planetDetail} /> 
        <Route exact path='/PeopleDetail/:id' component={PeopleDetail} /> 
        <Route exact path='/MovieDetail/:id' component={MovieDetail} /> 
        <Route exact path='/StarshipDetail/:id' component={StarshipDetail}/>
        <Route exact path='/VehicleDetail/:id' component={VehicleDetail}/>
        <Route exact path='/SpeciesDetail/:id' component={SpeciesDetail}/>
        <Route exact path='/CustomDetail/:id' component={CustomDetail} />
        <Route exact path='/AnimTest' component={Anim}/>
      </div>
    );
  }
}

export default App;
