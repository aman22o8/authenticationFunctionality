// Write your JS code here
import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
// import {withRouter} from 'react-router-dom'

class Home extends Component {
  state = {mylist: {}}

  signout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {mylist} = this.state
    console.log(mylist)

    return (
      <>
        <div className="home_container">
          <Header />
          <h1 className="home_heading">Home Route</h1>
          <button onClick={this.signout} type="button">
            Logout
          </button>
        </div>
      </>
    )
  }
}

export default Home
