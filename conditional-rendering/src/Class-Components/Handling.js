import React, { Component } from 'react'

export default class Handling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userInput : ''
      }
    }
    
    handlingInput = (e)=>{
        
        this.setState({
            userInput : e.target.value
        },()=>{
            console.log(this.state.userInput);
        })
    }

  render() {
    const {userInput} = this.state;
    return (
      <div>
        <input type='text' onChange={this.handlingInput} id="user-input"/>
        <p>{userInput}</p>
      </div>
    )
  }
}
