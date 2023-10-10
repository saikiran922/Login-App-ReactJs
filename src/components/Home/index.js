// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onButtonClick = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.onButtonClick} />
          ) : (
            <Login login={this.onButtonClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
