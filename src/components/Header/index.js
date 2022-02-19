import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import {IoCloseCircle} from 'react-icons/io5'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {showNavItemsUnderHamburger: false}

  hamburgerClicked = () => {
    this.setState({showNavItemsUnderHamburger: true})
  }

  searchClicked = () => {
    this.setState({showNavItemsUnderHamburger: false})
  }

  optionsClose = () => {
    this.setState({showNavItemsUnderHamburger: false})
  }

  logout = () => {
    const {history} = this.props

    Cookies.remove('jwtToken')
    history.replace('/')
  }

  testingFunction = () => {
    console.log(
      'test test test test test test test test test test test test test test test test test test test test test test test test ',
    )
  }

  routeToProfilePage = () => {
    console.log(
      'xvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvvxvxvxvxvxvxxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxvxv',
    )
  }

  clickedHome = () => {
    console.log(
      'XXXXXXXXXXXXhome home home home home home home home home home home home home home home home home home home home homeXXXXXXXXX',
    )
  }

  render() {
    const {showNavItemsUnderHamburger} = this.state

    return (
      <nav>
        <Link to="/">
          <div>
            <img
              src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645148617/Standard_Collection_8-website_logo_tid9hk.png"
              alt="website logo"
            />
            <p>Insta Share</p>
          </div>
        </Link>

        <ul className="nav-items-large-display">
          <li>
            <input type="search" placeholder="Search Caption" />
            <button type="button" testid="searchIcon">
              <FaSearch />
            </button>
          </li>
          <li>
            {/*  <button type="button" > */}
            <Link to="/" onClick={this.testingFunction}>
              <p>Home</p>
            </Link>
            {/*   </button> */}
          </li>
          <li>
            {/*  <button type="button" > */}
            <Link to="/my-profile" onClick={this.testingFunction}>
              <p>Profile</p>
            </Link>
            {/*   </button> */}
          </li>
          <li>
            <button type="button" onClick={this.logout}>
              Logout
            </button>
          </li>
        </ul>

        <div className="nav-items-small-display">
          <button type="button" onClick={this.hamburgerClicked}>
            <GiHamburgerMenu />
          </button>
          {showNavItemsUnderHamburger && (
            <ul>
              <li>
                <button type="button" onClick={this.searchClicked}>
                  Search
                </button>
              </li>
              <li>
                {/*  <button type="button" > */}
                <Link to="/" onClick={this.testingFunction}>
                  <p>Home</p>
                </Link>
                {/*   </button> */}
              </li>
              <li>
                {/*  <button type="button" > */}
                <Link to="/my-profile" onClick={this.testingFunction}>
                  <p>Profile</p>
                </Link>
                {/*   </button> */}
              </li>
              <li>
                <button type="button" onClick={this.logout}>
                  Logout
                </button>
              </li>
              <li>
                <button type="button" onClick={this.optionsClose}>
                  <IoCloseCircle />
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)
