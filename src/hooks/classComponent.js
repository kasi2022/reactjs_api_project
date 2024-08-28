import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state={
            name:"john"

        }
        console.log("constructer-1")
    }
    //life cycle methods 
    componentDidMount(){
        console.log("function 1")
    }
    componentWillUnmount(){
        console.log("function 2")
    }

  render() {
     console.log("Render The usi Screen -2")
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
