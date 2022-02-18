import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

// const Login = () => <h1>Login Route</h1>

class Login extends Component {
  state = {usernameInput: '', passwordInput: '', errorMessageOnSubmission: ''}

  takingUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  takingPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  loginCredentialSubmission = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwtToken', data.jwt_token, {expires: 1})
      console.log(this.props)
      const {history} = this.props
      history.replace('/')
    }
    if (!response.ok) {
      console.log(data)
      this.setState({errorMessageOnSubmission: data.error_msg})
    }
  }

  render() {
    const {errorMessageOnSubmission} = this.state
    if (Cookies.get('jwtToken') !== undefined) {
      /* if jwtToken exists */ return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <div className="large-display-image-login-form-container">
          <div className="login-image-container">
            <img
              src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645148033/Layer_2_hhrvzj.png"
              alt="website login"
            />
          </div>
          <form
            className="login-form"
            onSubmit={this.loginCredentialSubmission}
          >
            <div>
              <img
                src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645148617/Standard_Collection_8-website_logo_tid9hk.png"
                alt="website logo"
              />
            </div>
            <p>Insta Share</p>
            <label htmlFor="username">USERNAME</label>
            <div>
              <input
                id="username"
                type="text"
                className="login-form-input-field"
                onChange={this.takingUsername}
                /* value={usernameInput} */
              />
            </div>

            <label htmlFor="password">PASSWORD</label>
            <div>
              <input
                id="password"
                type="password"
                className="login-form-input-field"
                onChange={this.takingPassword}
                /* value={passwordInput} */
              />
              <p className="login-error-message">{errorMessageOnSubmission}</p>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
