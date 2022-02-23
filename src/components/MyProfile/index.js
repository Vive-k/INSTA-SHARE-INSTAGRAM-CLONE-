import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'

import SearchComponent from '../SearchComponent'
import SearchComponentContext from '../../Context/SearchComponentContext'

import LoaderComponent from '../LoaderComponent'
import SomethingWentWrong from '../SomethingWentWrong'

import ProfileComponent from '../ProfileComponent'

import './index.css'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class MyProfile extends Component {
  state = {
    userProfileDetailsFetchStatus: dataFetchStatusConstants.initial,
    userProfileData: {},
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    this.setState({
      userProfileDetailsFetchStatus: dataFetchStatusConstants.loading,
    })
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/my-profile`,
      {
        headers: {Authorization: `Bearer ${Cookies.get('jwt_token')}`},
        method: 'GET',
      },
    )
    if (response.ok) {
      const data = await response.json()
      const userProfileData = data.profile

      this.setState({
        userProfileDetailsFetchStatus: dataFetchStatusConstants.success,
        userProfileData,
      })
    }
    if (!response.ok) {
      this.setState({
        userProfileDetailsFetchStatus: dataFetchStatusConstants.failure,
      })
    }
  }

  renderUserProfile = () => {
    const {userProfileDetailsFetchStatus, userProfileData} = this.state
    switch (userProfileDetailsFetchStatus) {
      case dataFetchStatusConstants.loading:
        return (
          <div className="loader-component-container-profile">
            <LoaderComponent />
          </div>
        )
      case dataFetchStatusConstants.success:
        return (
          <>
            <ProfileComponent userProfileData={userProfileData} />
          </>
        )
      case dataFetchStatusConstants.failure:
        return (
          <div className="search-component-failure">
            <SomethingWentWrong retryFunction={this.getUserProfileData} />
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />

        <SearchComponentContext.Consumer>
          {value => {
            const {showSearchComponent} = value

            return (
              <>
                {showSearchComponent ? (
                  <>
                    <div>
                      <SearchComponent />
                    </div>
                  </>
                ) : (
                  <>{this.renderUserProfile()}</>
                )}
              </>
            )
          }}
        </SearchComponentContext.Consumer>
      </div>
    )
  }
}

export default MyProfile

//  *********** */
