import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'

const ProfileComponent = props => {
  const {userProfileData} = props
  console.log('....,,,,..845682975359')
  console.log(props)
  const {match} = props
  const altValueProfilePic =
    match.path === '/my-profile' ? 'my profile' : 'user profile'
  const altValueStory = match.path === '/my-profile' ? 'my story' : 'user story'
  const altValuePost = match.path === '/my-profile' ? 'my post' : 'user post'

  console.log('....,,,,..845682975359')
  console.log(userProfileData)
  return (
    <div>
      <h1>{userProfileData.user_name}</h1>

      <div>
        <div>
          <img src={userProfileData.profile_pic} alt={altValueProfilePic} />
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
        {/* <p>{userProfileData.user_id}</p> small large device adjustment 
      <p>{userProfileData.user_bio}</p> */}
      </div>

      <ul>
        {userProfileData.stories.map(each => (
          <li key={each.id}>
            <img src={each.image} alt={altValueStory} />
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
              <img src={each.image} alt={altValuePost} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default withRouter(ProfileComponent)
