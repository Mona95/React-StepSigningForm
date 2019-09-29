import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    } 
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'/>
                    <br/>
                    <h4>Thanks For Your Submission</h4>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success
