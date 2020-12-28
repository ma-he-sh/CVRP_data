import React from "react";
import {ResultManager} from "./data/results";
import {AlgoSection} from "./components/wrapper";

// var matrix = new MatrixLoader();
// var location = matrix.get_location_by_index( 3 );
// console.log( location );

// var distance = matrix.get_distance( 'Aubun', 'Baden' );
// console.log( distance );


export default class App extends React.Component<{}, {}>{
    private data:any = {
        aco: [],
        ga: [],
        sweep: [],
    };
    private datasets:Array<any> = [];
    constructor(props:{}) {
        super(props);
        this.state = {}
        this.loadData();
    }

    loadData() {
        var resultData = new ResultManager();
        // var aco_data = resultData.get_data_by_algorithm("aco");
        // this.data.aco = aco_data;
        //
        // var ga_data  = resultData.get_data_by_algorithm("ga");
        // this.data.ga = ga_data;
        //
        // var sweep_data = resultData.get_data_by_algorithm("sweep");
        // this.data.sweep = sweep_data;
        //

        this.datasets = resultData.get_all_datasets();
    }

    render() {

        return (
            <div className='app--body'>
                <div className='app--section'>
                    <div className='app--title'>CVRP Data Visualizer</div>
                    <div className='app--description'>Pre-recorded optimization data for Genetic, Ant Colony Optimization and Sweep Algorithm </div>
                </div>
                <div className='app--alg-section'>
                    { this.datasets.map(( dataset:any, index:number ) => {
                        return <AlgoSection name={dataset.name} data={dataset.data} />
                    }) }
                </div>
            </div>
        )
    }
}


interface formStruct {
    [key:string]:any
}