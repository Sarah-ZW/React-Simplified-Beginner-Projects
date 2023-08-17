import React from "react"

export class Child extends React.Component {
  constructor() {
    super()
    this.state = {
      age: 0,
      name: "",
    }
  }

  componentDidUpdate(prevprop, prevstate) {
    if (prevstate.name !== this.state.name) {
      console.log("re-render")
    }
    if (
      prevstate.name !== this.state.name ||
      prevstate.age !== this.state.age
    ) {
      console.log(`My name is ${this.state.name} and I am ${this.state.age}`)
    }
  }

  componentDidMount() {
    console.log("hi")
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age - 1 }
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age + 1 }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}
