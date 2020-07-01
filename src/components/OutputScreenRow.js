import React, { Component } from 'react';

class OutputScreenRow  extends Component {

    render() { 
        return (
            <div className="screen-row">
                <input type="text" read only value={this.props.value}></input>
            </div>
          );
    }
}
 
export default OutputScreenRow ;