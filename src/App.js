import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      age: 30
    }
  }

  onUpButton = () => this.setState({
    age: ++ this.state.age
  })

  onDownButton = () => this.setState({
    age: -- this.state.age
  })


  render(){

    return (
      <div className="App">
        <div>Age: <span>{this.state.age}</span></div>
        <button onClick={this.onUpButton}>Button Up</button>
        <button onClick={this.onDownButton}>Button Down</button>
      </div>
    );
  }
}

export default App;
