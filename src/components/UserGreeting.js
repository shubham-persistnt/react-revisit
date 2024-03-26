import React, {Component} from 'react'

class UserGreeting extends Component{
  constructor(){
    super()

    this.state = {
      isLoggedIn: true
    }
  }

  render(){
    return( this.state.isLoggedIn && <div>Welcome Shubham ! </div> )
  }
}

export default UserGreeting
