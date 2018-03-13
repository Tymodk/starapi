import * as React from 'react';
import xwing from '../../resources/xwing.png'
import woosh1 from '../../resources/woosh1.png'
import woosh2 from '../../resources/woosh2.png'
export default class planetDetail extends React.Component { 

    render() {
        return (
            <section>
            
                <div className="wrapper">        
                    <ul className="planet">
                       <div class="info">
                            <div className="loadzone"><div className="ship-container"><img src={xwing} alt="xwing ship" className="ship"/></div><img src={woosh1} alt="woosh symbol 1" className="woosh1"/><img src={woosh2} alt="woosh symbol 2" className="woosh2"/></div> 
                        </div>   
                    </ul>                           
                </div>
            </section>);
    }
};
        