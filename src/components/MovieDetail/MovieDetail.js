import * as React from 'react';
import * as starService from '../../services/star.service';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class planetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: { title: ''}
        };
    }


    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        starService.getMovie(this.props.match.params.id).then(response => this.setState({ movie: response }));
    }
   
        
               
    
  
    

    render() {
        return (
            <section>
            
                <div className="wrapper">
                <ul class="nav nav-tabs">
                        <li><a href="/">Home</a></li>
                        <li class="active"><a data-toggle="pill" href="#two">Movie: {this.state.movie.title} </a></li>
                </ul>
                <div class="tab-content">  
                 <div id="one" class="tab-pane fade in active">      
                    <ul className="planet">
                    {this.state.movie.title === '' ? (<div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div>) : 
                    
                       <div class="info">
                                                  
                            <pre><p>Episode: {this.state.movie.episode_id} </p>
                            <p>Opening crawl: </p>
                            <p>{this.state.movie.opening_crawl} </p>
                            <p>Director: {this.state.movie.director} </p>
                            <p>Producer: {this.state.movie.producer} </p>
                            <p>Release date: {this.state.movie.release_date} </p>
                            <p>Characters: </p><pre>{this.state.movie.characters.map((character, i) => (            
            character.length === 30 ? <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/peopleDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))}</pre>
                            <p>Planets: </p><pre>{this.state.movie.planets.map((character, i) => (            
            character.length === 31 ? <p key={i}><a href={"/planetDetail/" + character.substring(character.length - 2)}>{character} </a> </p> : <p key={i}><a href={"/planetDetail/" + character.substring(character.length - 3)}>{character} </a> </p>
                                
            ))} </pre>
                            <p>Species: <pre>{this.state.movie.species.map((item, i) => (            
                item.length === 31 ? <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/speciesDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre></p>
<p>Owns these vehicles: </p><pre>{this.state.movie.vehicles.map((item, i) => (            
                item.length === 32 ? <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/vehicleDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                                              
            ))
    }</pre>
            <p>Owns these starships:</p><pre> {this.state.movie.starships.map((item, i) => (            
                item.length === 33 ? <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 2)}>{item} </a> </p> : <p key={i}><a href={"/starshipDetail/" + item.substring(item.length - 3)}>{item} </a> </p>
                              
            ))
    }</pre>
                            <p>Created: {this.state.movie.created} </p>
                            <p>Edited: {this.state.movie.edited} </p>
                                
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
