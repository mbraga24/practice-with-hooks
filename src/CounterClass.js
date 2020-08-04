import React, { Component } from "react";

class CounterClass extends Component {

  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return( 
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleClick}> Click here to count</button>
      </div>
    )
  }
}

export default CounterClass;