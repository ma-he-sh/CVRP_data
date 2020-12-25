import React from "react";
import { render } from "react-dom";
import { SelectEl } from "./components/input";
import { preConfigs } from "./data/data";
import { MatrixLoader } from "./data/matrix";

var matrix = new MatrixLoader();
var location = matrix.get_location_by_index( 3 );
console.log( location );

var distance = matrix.get_distance( 'Aubun', 'Baden' );
console.log( distance );

export default class App extends React.Component<{}, {}>{
    constructor(props:{}) {
        super(props);
    }

    render() {
        return (
            <div className='app--body'>
                <div className='app--section'>
                    <div className='app--title'>CVRP Data Visualizer</div>
                    <div className='app--description'>Pre-recorded optimization data for Genetic, Ant Colony Optimization and Sweep Algorithm </div>
                </div>
                <div className='app--section'>
                    <div className='app--alg-name'>Genetic Algorithm</div>
                    <div className='app--controls'>
                        
                    </div>
                    <div className='app--graph-wrapper'></div>
                </div>
                <div className='app--section'>
                    <div className='app--alg-name'>Ant Colony Algorithm</div>
                    <div className='app--controls'>
                        <form>
                            {preConfigs.aco.controls.map(( el, i ) => {
                                return <SelectEl name={el.name} label={el.label} title={el.title} options={el.options} />
                            })}
                        </form>
                    </div>
                    <div className='app--graph-wrapper'></div>
                </div>
                <div className='app--section'>
                    <div className='app--alg-name'>Sweep Algorithm</div>
                    <div className='app--controls'></div>
                    <div className='app--graph-wrapper'></div>
                </div>
            </div>
        )
    }
}


interface formStruct {
    [key:string]:any
}