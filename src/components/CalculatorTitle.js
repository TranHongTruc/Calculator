import React, { Component } from 'react';

class CalculatorTitle extends Component {

    render() { 
        return ( 
            <div className = "calculator-title">
                {this.props.title}
            </div>
         );
    }
}
 
export default CalculatorTitle;