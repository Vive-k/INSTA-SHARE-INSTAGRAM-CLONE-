import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import LoaderComponent from '../LoaderComponent'
import SomethingWentWrong from '../SomethingWentWrong'
import ProfileComponent from '../ProfileComponent'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserProfileCoreComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userProfileDetailsFetchStatus: dataFetchStatusConstants.initial,
      userProfileData: {},
    }
  }

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    this.setState({
      userProfileDetailsFetchStatus: dataFetchStatusConstants.loading,
    })
    const {match} = this.props
    const {params} = match
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/users/${params.id}`,
      {
        headers: {Authorization: `Bearer ${Cookies.get('jwt_token')}`},
        method: 'GET',
      },
    )

    if (response.ok) {
      const data = await response.json()
      const userProfileData = data.user_details
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
        return (
          <div>
            <SomethingWentWrong retryFunction={this.getUserProfileData} />
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderUserProfile()}</div>
  }
}

export default withRouter(UserProfileCoreComponent)
