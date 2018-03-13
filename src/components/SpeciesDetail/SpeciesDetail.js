import * as React from 'react';
import * as starService from '../../services/star.service';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class SpeciesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specy: {
                    name:'',
                    people:'',
                    films:'',
                    

            }
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getSpecy(this.props.match.params.id).then(response => this.setState({ specy: response }));
    }
   
        
               
    
  
    

    render() {
        return (
            <section>
            
                <div className="wrapper">
                <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a data-toggle="pill" href="#two">Species: {this.state.specy.name} </a></li>
                </ul>
                <div class="tab-content">  
                 <div id="one" class="tab-pane fade in active">      
                    <ul className="Specy">
                    {this.state.specy.name === '' ? (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>) : 
                       <div class="info">
                                                  
                            <pre>
                                <p>Classification: {this.state.specy.classification}</p>
                                <p>Designation: {this.state.specy.designation}</p>
                                <p>Average height: {this.state.specy.average_height}</p>
                                <p>Possible skin colors: {this.state.specy.skin_colors}</p>
                                <p>Possible hair colors: {this.state.specy.hair_colors}</p>
                                <p>Possible eye colors: {this.state.specy.eye_colors}</p>
                                <p>Average lifespan: {this.state.specy.average_lifespan}</p>
                                <p>Homeworld: {this.state.specy.homeworld.length === 31 ? <p><a href={"/planetDetail/" + this.state.specy.homeworld.substring(this.state.specy.homeworld.length - 2)}>{this.state.specy.homeworld} </a> </p> : <p><a href={"/planetDetail/" + this.state.specy.homeworld.substring(this.state.specy.homeworld.length - 3)}>{this.state.specy.homeworld} </a> </p>}</p>
                                <p>Language: {this.state.specy.language}</p>
                                <p>Famous people: </p><pre>{this.state.specy.people.length === 0 ? <p>No famous people of this species</p> : this.state.specy.people.map((character, i) => (            
                                character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                                    
                                ))}</pre>
                                <p>Featured in these films: </p><pre>{this.state.specy.films.map((film, i) => (            
                                film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                                    
                                ))}</pre>
                                
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
        