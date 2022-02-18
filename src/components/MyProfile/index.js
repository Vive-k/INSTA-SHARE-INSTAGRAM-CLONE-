import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

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
    console.log(userProfileData)
    switch (userProfileDetailsFetchStatus) {
      case dataFetchStatusConstants.loading:
        return (
          <div
            className="loader-container"
            testid="loader"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
          </div>
        )
      case dataFetchStatusConstants.success:
        return (
          <div>
            <h1>{userProfileData.user_name}</h1>

            <div>
              <div>
                <img src={userProfileData.profile_pic} alt="user profile" />
              </div>

              <div>
                <div>
                  <div>
                    <p>{userProfileData.posts_count}</p>
                    <p>posts</p>
                  </div>

                  <div>
                    <p>{userProfileData.followers_count}</p>
                    <p>followers</p>
                  </div>

                  <div>
                    <p>{userProfileData.following_count}</p>
                    <p>following</p>
                  </div>
                </div>

                <p>{userProfileData.user_id}</p>
                <p>{userProfileData.user_bio}</p>
              </div>
            </div>

            <p>{userProfileData.user_id}</p>
            <p>{userProfileData.user_bio}</p>
            <ul>
              {userProfileData.stories.map(each => (
                <li key={each.id}>
                  <img src={each.image} alt="user story" />
                </li>
              ))}
            </ul>

            <hr />
            <div>
              <BsGrid3X3 />
              <h1>Posts</h1>
            </div>
            {userProfileData.posts.length === 0 ? (
              <div>
                <BiCamera style={{color: '#000000'}} />
                <h1>No Posts Yet</h1>
              </div>
            ) : (
              <ul>
                {userProfileData.posts.map(each => (
                  <li key={each.id}>
                    <img src={each.image} alt="user post" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      case dataFetchStatusConstants.failure:
        return (
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645180684/alert-triangle-failure-view_htbcnn.png"
                alt="failure-view"
              />
            </div>
            <p>Something went wrong. Please try again</p>
            <button type="button" onClick={this.getUserProfileData}>
              Retry
            </button>
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

export default MyProfile
