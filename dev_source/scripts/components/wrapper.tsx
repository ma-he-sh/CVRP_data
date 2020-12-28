import React, {Component} from "react";
import { PlayCircle } from "react-feather";

export class AlgoRuns extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = {
            show: false,
        }
    }

    toggleChart(e:any) {
        console.log( e );
    }

    render() {
        var classID = "algo--id";
        switch ( this.props.id ) {
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

        return <div className="algo--run-wrapper">
            {this.props.runs.map((run:any, index:number) => {
                var changeField = "";
                if( run.field ) {
                    changeField = run.field;
                }
                return <div className="algo---row">
                    <div className="algo--run-header">
                        <div className={classID}>{this.props.id}</div>
                        <div className="algo--param">
                            {Object.keys(run.fields).map((field:any, index:number) => {
                                var highlightClass = "params";
                                if( field === changeField ) {
                                    highlightClass = "params highlight";
                                }
                                return <div className={highlightClass}>{field} : {run.fields[field]}</div>
                            })}
                        </div>
                        <div className="algo--play" onClick={this.toggleChart(this)}><PlayCircle /></div>
                    </div>
                    {this.state.show &&
                        <div className="algo--run-content"></div>
                    }
                </div>
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
                        return <AlgoWrapper data={this.props.data[algo]} />
                    })}
                </div>
            </div>
        </div>
    }
}