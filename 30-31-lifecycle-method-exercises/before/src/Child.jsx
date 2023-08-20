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
    console.log("re-render")

    if (prevstate.name !== this.state.name) {
      document.title = this.state.name

      if (this.varSetTimeout != null) clearTimeout(this.varSetTimeout)
      this.varSetTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`)
      }, 1000)
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
    console.log("re-render")
  }
  componentWillUnmount() {
    console.log("bye")
    if (this.varSetTimeout != null) clearTimeout(this.varSetTimeout)
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
