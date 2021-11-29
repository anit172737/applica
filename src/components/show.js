import React, { Component } from 'react';

class Show extends Component {

    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
    render() {
        return (
            <div>
                <h1>Show div</h1>
            </div>
        );
    }
}

export default Show;