import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    age: 21
  }

  onAgeUp = () => {
    this.setState({

        age: ++this.state.age
      })
  };


  onAgeDown = () => this.setState({age: --this.state.age});


  render(){

    return (
      <div className="App">
        <div>age: <span>{this.state.age}</span></div>
        <button onClick={this.onAgeUp}>Age Up</button>
        <button onClick={this.onAgeDown}>Age Down</button>

      </div>
    );
  }
}

export default App;
