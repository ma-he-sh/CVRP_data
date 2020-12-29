import React, {Component} from "react";
import { Scatter } from 'react-chartjs-2';

export class MatrixGraph extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        var chartdata = {
            labels: ['Scatter'],
            datasets: this.props.graph,
        };
        var options = {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem:any, data:any) {
                            console.log( tooltipItem, data );
                        }
                    }
                }
        }
        
        return (
            <div className="algo--canvas">
                <div className="algo--bestsol">
                    {this.props.bestsol &&
                        <div className="bestsol--val">Distance: {this.props.bestsol}</div>
                    }
                </div>
                <Scatter data={chartdata} options={options} />
            </div>
        )
    }
}