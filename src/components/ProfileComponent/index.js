import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

const ProfileComponent = props => {
  const {userProfileData} = props
  console.log(userProfileData)
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
}

export default ProfileComponent
