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
      <h1 className="profile-name for-small-display">
        {userProfileData.user_name}
      </h1>
      <div className="profile-container">
        <img
          className="profile-image"
          src={userProfileData.profile_pic}
          alt={altValueProfilePic}
        />

        <div className="profile-details-data-container">
          <h1 className="profile-name for-large-display">
            {userProfileData.user_name}
          </h1>
          <div className="profile-activity-data">
            <div className="profile-activities">
              <div className="profile-activities-count">
                <p className="profile-activities-number">
                  {' '}
                  {userProfileData.posts_count}
                </p>
                <p className="profile-activities-title">posts </p>
              </div>
            </div>

            <div className="profile-activities">
              <p className="profile-activities-count">
                <p className="profile-activities-number">
                  {userProfileData.followers_count}
                </p>
                <p className="profile-activities-title">followers </p>{' '}
              </p>
            </div>

            <div className="profile-activities">
              <p className="profile-activities-count">
                <p className="profile-activities-number">
                  {' '}
                  {userProfileData.following_count}
                </p>
                <p className="profile-activities-title">following </p>{' '}
              </p>
            </div>
          </div>

          <p className="user-id-profile for-large-display">
            {userProfileData.user_id}
          </p>
          <p className="user-bio-profile for-large-display">
            {userProfileData.user_bio}
          </p>
        </div>
      </div>
      <p className="user-id-profile for-small-display">
        {userProfileData.user_id}
      </p>
      <p className="user-bio-profile for-small-display">
        {userProfileData.user_bio}
      </p>

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
