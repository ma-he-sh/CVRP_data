import React from "react";

export class SelectEl extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return <div className='control--group'>
            <div className='control--label'>{this.props.label}:</div>
            <select name={this.props.name} title={this.props.title} className='control--input'>
                { this.props.options.map( ( option, i ) => {
                    let selected = "";
                    if( option.selected ) {
                        selected = "selected";
                    }
                    return <option value={option.value} {selected} >{option.name}</option>
                } ) }
            </select>
        </div>
    }
}