import * as React from 'react';
import * as starService from '../../services/star.service';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class planetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {name: ''}
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getPerson(this.props.match.params.id).then(response => this.setState({ person: response }));
    }
   
        
               
    
  
    

    render() {
        return (
            <section>
            
                <div className="wrapper">
                <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a data-toggle="pill" href="#two">Person: {this.state.person.name} </a></li>
                </ul>
                <div class="tab-content">  
                 <div id="one" class="tab-pane fade in active">      
                    <ul className="person">
                    {this.state.person.name === '' ? (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>) : 
                    
                       <div class="info">
                                                  
                            <pre>
                                <p>Height: {this.state.person.height} </p>
                                <p>Mass: {this.state.person.mass} </p>
                                <p>Hair color: {this.state.person.hair_color} </p>
                                <p>Skin color: {this.state.person.skin_color} </p>
                                <p>Eye color: {this.state.person.eye_color} </p>
                                <p>Birth year: {this.state.person.birth_year}</p>
                                <p>Gender: {this.state.person.gender} </p>
                                <p>Homeworld: {this.state.person.homeworld.length === 31 ? <p><a href={"/planetDetail/" + this.state.person.homeworld.substring(this.state.person.homeworld.length - 2)}>{this.state.person.homeworld} </a> </p> : <p><a href={"/planetDetail/" + this.state.person.homeworld.substring(this.state.person.homeworld.length - 3)}>{this.state.person.homeworld} </a> </p>}</p>
                                <p>Species: <pre>{this.state.person.species.map((item, i) => (            
                item.length === 31 ? <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre></p>
                                <p>Featured in these films: </p><pre>{this.state.person.films.map((film, i) => (            
            film.length === 29 ? <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 2)}>{film} </a> </p> : <p key={i}><a href={"/movieDetail/" + film.substring(film.length - 3)}>{film} </a> </p>
                                
            ))}</pre>
                                
            <p>Owns these vehicles: </p><pre>{this.state.person.vehicles.map((item, i) => (            
                item.length === 32 ? <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre>
            <p>Owns these starships:</p><pre> {this.state.person.starships.map((item, i) => (            
                item.length === 33 ? <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                              
            ))
    }</pre>
                                <p>Created at: {this.state.person.created} </p>
                                <p>Last Edited at: {this.state.person.edited}</p>
                                
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
