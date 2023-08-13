import React from "react"

export class NameAgeClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: "", age: 0 }
  }

  render() {
    const decreaseAge = () => {
      this.setState((currentState) => {
        if (currentState.age >= 1) {
          return { age: currentState.age - 1 }
        }
        return { age: currentState.age }
      })
    }

    const increaseAge = () => {
      this.setState((currentState) => {
        return { age: currentState.age + 1 }
      })
    }

    return (
      <>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        <br />
        <br />
        <button onClick={decreaseAge}>-</button>
        <p>{this.state.age}</p>
        <button onClick={increaseAge}>+</button>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old
        </p>
      </>
    )
  }
}
