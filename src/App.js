import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state= {
      counter: 0
    };
  }
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className= "Counter">
        <button className= "btn" onClick= {() => this.incrementCounter()}> Increment</button>
        <p> {this.state.counter}</p>
        <button className ="btn" onClick= {() =>this.decrementCounter()}> Decrement </button>
      </div>
    );
  }
}

export default App;
