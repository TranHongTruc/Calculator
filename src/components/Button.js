import React, { Component } from 'react';

class Button extends Component {

    render() { 
        return (  
            <input
                className= {this.props.className}
                type = "button"
                value={this.props.label}
                onclick={this.props.handleClick}
            />
        );
    }
}
 
export default Button;