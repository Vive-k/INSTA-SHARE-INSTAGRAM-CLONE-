import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

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
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    }
    if (!response.ok) {
      this.setState({errorMessageOnSubmission: data.error_msg})
    }
  }

  render() {
    const {errorMessageOnSubmission} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <div className="large-display-image-login-form-container">
          <div className="login-image-container">
            <img
              className="login-page-image"
              src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645148033/Layer_2_hhrvzj.png"
              alt="website login"
            />
          </div>
          <div className="login-form-container">
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
              <h1 className="form-logo-title">Insta Share</h1>
              <label htmlFor="username" className="login-form-label">
                USERNAME
              </label>
              {/* } <div> { */}
              <input
                id="username"
                type="text"
                className="login-form-input-field"
                onChange={this.takingUsername}
                /* value={usernameInput} */
              />
              <br />
              {/* }   </div> { */}
              <label htmlFor="password" className="login-form-label">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="login-form-input-field"
                onChange={this.takingPassword}
                /* value={passwordInput} */
              />
              <p className="login-error-message">{errorMessageOnSubmission}</p>
              <br />

              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

// ************ */
