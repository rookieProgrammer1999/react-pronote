import React, { Component } from 'react';
import './Editor.css'

class Editor extends Component {
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
        {
            value: ''
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea rows={ 40 } cols={ 95 } className="input-text" onChange={ this.handleChange } defaultValue={ this.state.value } />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    {/* <div className="output-text"> */ }
                    <textarea rows={ 40 } cols={ 95 } className="output-text" defaultValue={ this.state.value } disabled />
                    {/* { this.state.value } */ }
                    {/* </div> */ }
                </div>
            </div>
        );
    }
}

export default Editor;