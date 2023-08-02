// Write your JS code here
// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'

class About extends Component {
  state = {mylist: {}}

  signingout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {mylist} = this.state
    console.log(mylist)
    return (
      <>
        <div className="about_container">
          <Header />
          <h1 className="about_heading">About Route</h1>
          <button onClick={this.signingout} type="button">
            Logout
          </button>
        </div>
      </>
    )
  }
}

export default About
