import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'

import LoaderComponent from '../LoaderComponent'
import FailureView from '../FailureView'

import ProfileComponent from '../ProfileComponent'

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
        headers: {Authorization: `Bearer ${Cookies.get('jwtToken')}`},
        method: 'GET',
      },
    )
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
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
        return <LoaderComponent />
      case dataFetchStatusConstants.success:
        return (
          <>
            <ProfileComponent userProfileData={userProfileData} />
          </>
        )
      case dataFetchStatusConstants.failure:
        return <FailureView retryFunction={this.getUserProfileData} />
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderUserProfile()}
      </div>
    )
  }
}

export default MyProfile
