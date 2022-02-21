import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import {IoCloseCircle} from 'react-icons/io5'
import Cookies from 'js-cookie'
import SearchComponentContext from '../../Context/SearchComponentContext'

import './index.css'

/* const Header = props =>  */

class Header extends Component {
  state = {showHamOptions: false}

  toShowHamOptions = () => {
    this.setState({showHamOptions: true})
  }

  render() {
    const {showHamOptions} = this.state
    return (
      <>
        <SearchComponentContext.Consumer>
          {value => {
            const {
              showSearchComponent,
              changeStatusOfSearchComponent,
              updateSearchInput,
              searchInputValue,
              searchComponentShowStatusChange,
              resetSearchInput,
              showNavItemsUnderHamburger,
              showOptionsSmall,
              closeOptionsSmall,
              searchComponentOpenSmall,
            } = value

            const searchComponentStatusChange = () => {
              changeStatusOfSearchComponent()
            }

            const openSearchComponentSmall = () => {
              searchComponentOpenSmall()
            }

            const intakeSearchInputText = event => {
              updateSearchInput(event.target.value)
            }

            const routingToHomeOrProfile = () => {
              searchComponentShowStatusChange()
            }

            const hamburgerClicked = () => {
              showOptionsSmall()
            }

            const optionsClose = () => {
              closeOptionsSmall()
            }

            const logout = () => {
              const {history} = this.props
              resetSearchInput()
              searchComponentShowStatusChange()
              Cookies.remove('jwt_token')
              history.replace('/login')
            }

            return (
              <nav>
                <Link to="/" onClick={routingToHomeOrProfile}>
                  <div>
                    <img
                      src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645148617/Standard_Collection_8-website_logo_tid9hk.png"
                      alt="website logo"
                    />
                    <h1>Insta Share</h1>
                  </div>
                </Link>

                <ul className="nav-items-large-display">
                  <li>
                    <input
                      type="search"
                      placeholder="Search Caption"
                      onChange={intakeSearchInputText}
                      value={searchInputValue}
                    />
                    <button
                      type="button"
                      testid="searchIcon"
                      onClick={searchComponentStatusChange}
                    >
                      <FaSearch />
                    </button>
                  </li>
                  <li>
                    {/*  <button type="button" > */}
                    <Link to="/" onClick={routingToHomeOrProfile}>
                      <p>Home</p>
                    </Link>
                    {/*   </button> */}
                  </li>
                  <li>
                    {/*  <button type="button" > */}
                    <Link to="/my-profile" onClick={routingToHomeOrProfile}>
                      <p>Profile</p>
                    </Link>
                    {/*   </button> */}
                  </li>
                  <li>
                    <button type="button" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
                <div className="nav-items-small-display">
                  <button
                    type="button"
                    onClick={hamburgerClicked /* this.toShowHamOptions */}
                  >
                    <GiHamburgerMenu />
                  </button>
                  {showNavItemsUnderHamburger /* showHamOptions */ && (
                    <ul>
                      <li>
                        {/*  <button type="button" > */}

                        <Link to="/" onClick={routingToHomeOrProfile}>
                          <p>Home</p>
                        </Link>
                        {/*   </button> */}
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={openSearchComponentSmall}
                        >
                          Search
                        </button>
                      </li>
                      <li>
                        {/*  <button type="button" > */}

                        <Link to="/my-profile" onClick={routingToHomeOrProfile}>
                          <p>Profile</p>
                        </Link>
                        {/*   </button> */}
                      </li>
                      <li>
                        <button type="button" onClick={logout}>
                          Logout
                        </button>
                      </li>
                      <li>
                        <button type="button" onClick={optionsClose}>
                          <IoCloseCircle />
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            )
          }}
        </SearchComponentContext.Consumer>
      </>
    )
  }
}
export default withRouter(Header)
