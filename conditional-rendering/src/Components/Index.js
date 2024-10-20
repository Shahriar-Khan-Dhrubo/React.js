import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'

export default class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    const {isLoggedIn} = this.state;
    return (
      <div>
        {isLoggedIn ? <Home /> : <Login />}
      </div>
    )
  }
}
