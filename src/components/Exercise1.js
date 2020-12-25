import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    updateName = (event) => {
        this.setState({name: event.target.value})
    }

    updateAge = (event) => {
        this.setState({age: event.target.value})
    }

    goClicked = () => {
        alert("Come in " + this.state.name +  " you're " + this.state.age + "- that's good enough")
    }

    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.updateName} />
                <input id="age-input" value={this.state.age} onChange={this.updateAge} />
                <button onClick={this.goClicked}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;