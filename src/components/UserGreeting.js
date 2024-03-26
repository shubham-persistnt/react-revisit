import React, {Component} from 'react'

class UserGreeting extends Component{
  constructor(){
    super()

    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    let message

    if (this.state.isLoggedIn) { 
      message = <div>Welcome Shubham ! </div> }
    else { 
      message = <div> Welcome Guest ! </div> 
    }
    return <div> {message} </div>
  }
}

export default UserGreeting
