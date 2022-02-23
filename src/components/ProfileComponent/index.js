import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'

import './index.css'

const ProfileComponent = props => {
  const {userProfileData} = props

  const {match} = props
  const altValueProfilePic =
    match.path === '/my-profile' ? 'my profile' : 'user profile'
  const altValueStory = match.path === '/my-profile' ? 'my story' : 'user story'
  const altValuePost = match.path === '/my-profile' ? 'my post' : 'user post'

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div>
          <img
            className="profile-image"
            src={userProfileData.profile_pic}
            alt={altValueProfilePic}
          />
        </div>

        <div>
          <h1 className="profile-name">{userProfileData.user_name}</h1>
          <div className="profile-activity-data">
            <div className="profile-activities">
              <p className="profile-activities-title">posts</p>
              <p className="profile-activities-count">
                {userProfileData.posts_count}
              </p>
            </div>

            <div className="profile-activities">
              <p className="profile-activities-title">followers</p>
              <p className="profile-activities-count">
                {userProfileData.followers_count}
              </p>
            </div>

            <div className="profile-activities">
              <p className="profile-activities-title">following</p>
              <p className="profile-activities-count">
                {userProfileData.following_count}
              </p>
            </div>
          </div>

          <p className="user-id-profile">{userProfileData.user_id}</p>
          <p className="user-bio-profile">{userProfileData.user_bio}</p>
        </div>

        {/* <p className="for-small-display">{userProfileData.user_id}</p>
          <p className="for-small-display">{userProfileData.user_bio}</p> */}
      </div>

      <ul className="profile-stories-container">
        {userProfileData.stories.map(each => (
          <li key={each.id}>
            <img
              className="profile-story-image"
              src={each.image}
              alt={altValueStory}
            />
          </li>
        ))}
      </ul>

      <hr className="horizantal-rule" />
      <div className="profile-post-title-container">
        <BsGrid3X3 />
        <h1 className="post-text">Posts</h1>
      </div>
      {userProfileData.posts.length === 0 ? (
        <div className="no-posts-profile-container">
          <BiCamera className="camera-icon" />
          <h1 className="no-posts-text">No Posts Yet</h1>
        </div>
      ) : (
        <ul className="profile-posts-container">
          {userProfileData.posts.map(each => (
            <li key={each.id}>
              <img
                className="post-image-profile"
                src={each.image}
                alt={altValuePost}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default withRouter(ProfileComponent)

//  ************** */
