// Write your JS code here
// Write your JS code here
import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {userDetails: {username: 'rahul', password: 'rahul@2021'}}

  onSubmitSuccess = jwtToken => {
    console.log(this.props)
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  getsubmit = async () => {
    const {userDetails} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const {userDetails} = this.state
    const jwttoken = Cookies.get('jwt_token')
    console.log(userDetails)
    if (jwttoken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="login_container">
          <h1 className="login_heading">Please Login</h1>
          <button onClick={this.getsubmit} type="button">
            Login with Sample Creds
          </button>
        </div>
      </>
    )
  }
}

export default Login
