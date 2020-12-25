import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

dataSelected = (event) => {
    const {value, name} = event.target
    this.setState({[name]: value}, () => {
        console.log(this.state.name + " selected " + this.state.fruit)
    })
}

render() {
    return (
        <div>
            <input id="name-input" name="name" value={this.state.name} onChange={this.dataSelected}/>
            <select id="select-input" name="fruit" value={this.state.fruit} onChange={this.dataSelected}>
                <option value=""></option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </select>
        </div>
    );
}
}

export default Exercise2;