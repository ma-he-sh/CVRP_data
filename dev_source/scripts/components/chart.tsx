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

        var graphdata = this.props.graphdata;

        var options = {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem:any, data:any) {
                            var labelIndex = tooltipItem.index;
                            var datasetIndex=tooltipItem.datasetIndex;

                            var finalLabel = "";
                            if( graphdata.length > 0 && datasetIndex in graphdata ) {
                                var data = graphdata[datasetIndex];
                                if( data.length > 0 && labelIndex in data ) {
                                    var ref = data[labelIndex];
                                    if( ref ) {
                                        finalLabel = `${ref.location} :: ${ref.demand} Pounds`;
                                    }
                                } 
                            }

                            return finalLabel;
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