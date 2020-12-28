import React, {Component} from "react";
import { Scatter } from 'react-chartjs-2';

export class MatrixGraph extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        var chartdata = {
            labels: ['Scatter'],
            datasets: this.props.graph
        };
        return (
            <div className="algo--canvas">
                <Scatter data={chartdata} />
            </div>
        )
    }
}