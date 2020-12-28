import React, {Component} from "react";
import { PlayCircle } from "react-feather";
import {MatrixGraph} from "./chart";
import {DatasetLoader} from "../data/dataset";

export class AlgoChart extends React.Component<any, any> {
    private plotdata:Array<any>=[];
    constructor(props:any) {
        super(props);
        this.state = {
            isToggledOn: false,
        }
        this.toggleChart = this.toggleChart.bind(this);
    }

    toggleChart() {
        if( !this.state.isToggledOn ) {
            console.log("load graphs");
            this.setPlot();
        }

        this.setState((state:any) => ({
            isToggledOn: !state.isToggledOn
        }));
    }

    setPlot() {
        console.log("clicked", this.props.run);
        console.log("dataset", this.props.dataset);

        var datasetLoader = DatasetLoader.getInstance();

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        this.plotdata = [];
        var numVehicles=1;
        if( 'data' in this.props.run ) {
            if( this.props.run.data.length > 0 ) {
                Object.keys( this.props.run.data ).map(( run:any, index:number ) => {
                    var payload = datasetLoader.get_data_and_labels( this.props.dataset, this.props.run.data[run] );

                    var assignColor  = getRandomColor();
                    this.plotdata.push(
                        {
                            label: `Vehicle ${numVehicles}`,
                            fill: false,
                            pointBorderWidth: 2,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            backgroundColor: assignColor,
                            pointRadius: 8,
                            showLine: true,
                            lineTension: 0,
                            labels: payload.label,
                            data: payload.data
                        }
                    )
                    numVehicles++;
                });
            }
        }
    }

    render() {
        var classID = "algo--id";
        switch ( this.props.algoid ) {
            case "ACO":
                classID += " ACO";
                break;
            case "SWEEP":
                classID += " SWEEP";
                break;
            case  "GA":
                classID += " GA";
                break;
        }

        var run = this.props.run;

        var changeField = "";
        if( run.field ) {
            changeField = run.field;
        }

        var showClass = "algo--run-content";
        var showGraph = false;
        if( this.state.isToggledOn ) {
            showClass = "algo--run-content show";
            showGraph = true;
        }

        return <div className="algo---row">
            <div className="algo--run-header">
                <div className={classID}>{this.props.algoid}</div>
                <div className="algo--param">
                    {Object.keys(run.fields).map((field:any, index:number) => {
                        var highlightClass = "params";
                        if( field === changeField ) {
                            highlightClass = "params highlight";
                        }
                        return <div className={highlightClass}>{field} : {run.fields[field]}</div>
                    })}
                </div>
                <div className="algo--play" onClick={this.toggleChart}><PlayCircle /></div>
            </div>
            <div className={showClass}>
                {showGraph &&
                    <MatrixGraph graph={this.plotdata} />
                }
            </div>
        </div>
    }
}

export class AlgoRuns extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return <div className="algo--run-wrapper">
            {this.props.runs.map((run:any, index:number) => {
                return <AlgoChart dataset={this.props.dataset} algoid={this.props.id} run={run} />
            })}
        </div>
    }
}

export class AlgoWrapper extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return <div className="app--alg-wrapper">
            <div className="app--alg-wrapper-content">
                <div className="app--alg-name">{this.props.data.title}</div>
                {this.props.data.description.length > 0 &&
                    <div className="app--alg-description">{this.props.data.description}</div>
                }
                {this.props.data.runs.length > 0 &&
                    <div className="app--alg-runs">
                        <AlgoRuns dataset={this.props.dataset} id={this.props.data.id} runs={this.props.data.runs} />
                    </div>
                }
            </div>
        </div>
    }
}

export class AlgoSection extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return <div className="app--wrapper">
            <div className="app--section">
                <div className="app--dataset-name">{this.props.name}</div>
            </div>
            <div className="app--section">
                <div className="app--dataset-content">
                    {Object.keys(this.props.data).map((algo:any, index:number) => {
                        return <AlgoWrapper dataset={this.props.name} data={this.props.data[algo]} />
                    })}
                </div>
            </div>
        </div>
    }
}