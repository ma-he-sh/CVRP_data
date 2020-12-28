import React, {Component} from "react";
import { PlayCircle } from "react-feather";

export class AlgoChart extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            isToggledOn: false,
        }
        this.toggleChart = this.toggleChart.bind(this);
    }

    toggleChart() {
        this.setState((state:any) => ({
            isToggledOn: !state.isToggledOn
        }));
        console.log("clicked");
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
        if( this.state.isToggledOn ) {
            showClass = "algo--run-content show";
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
            <div className={showClass}>SHOW</div>
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
                return <AlgoChart algoid={this.props.id} run={run} />
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
                        <AlgoRuns id={this.props.data.id} runs={this.props.data.runs} />
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