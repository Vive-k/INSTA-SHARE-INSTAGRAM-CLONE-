import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FcLike} from 'react-icons/fc'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import Cookies from 'js-cookie'

class UsersPosts extends Component {
  constructor(props) {
    super(props)
    const {userPost} = props
    this.state = {postLikedStatus: false, postLikedCounts: userPost.likes_count}
  }

  likeCLicked = async () => {
    const {userPost} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'POST',
      headers: {Authorization: `Bearer ${jwtToken}`},
      body: JSON.stringify({like_status: true}),
    }
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/posts/${userPost.post_id}/like`,
      options,
    )
    console.log(response)
    const data = await response.json()
    console.log(data)
    /* this.setState({postLikedStatus:true}) */
    this.setState(prevState => ({
      postLikedStatus: true,
      postLikedCounts: prevState.postLikedCounts + 1,
    }))
  }

  unlikeCLicked = async () => {
    const {userPost} = this.props
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'POST',
      headers: {Authorization: `Bearer ${jwtToken}`},
      body: JSON.stringify({like_status: false}),
    }
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/posts/${userPost.post_id}/like`,
      options,
    )
    console.log(response)
    const data = await response.json()
    console.log(data)
    /* this.setState({postLikedStatus:false}) */
    this.setState(prevState => ({
      postLikedStatus: false,
      postLikedCounts: prevState.postLikedCounts - 1,
    }))
  }

  render() {
    const {userPost} = this.props
    const postDetails = userPost.post_details
    const {postLikedCounts, postLikedStatus} = this.state

    return (
      <li>
        <div>
          <img src={userPost.profile_pic} alt="post author profile" />
          <Link to={`/users/${userPost.user_id}`}>
            <p>{userPost.user_name}</p>
          </Link>
        </div>
        <div>
          <img src={postDetails.image_url} alt="post" />
        </div>
        <div>
          {!postLikedStatus ? (
            <button type="button" onClick={this.likeCLicked} testid="likeIcon">
              <FcLike />
            </button>
          ) : (
            <button
              onClick={this.unlikeCLicked}
              type="button"
              testid="unLikeIcon"
            >
              <BsHeart />
            </button>
          )}
          <button type="button">
            <FaRegComment />
          </button>
          <button type="button">
            <BiShareAlt />
          </button>
        </div>
        <p>{postLikedCounts} likes</p>
        <p>{postDetails.caption}</p>
        <ul>
          {userPost.comments.map(eachComment => (
            <li key={eachComment.user_id}>
              <p>
                <span>{eachComment.user_name}</span> {eachComment.comment}
              </p>
            </li>
          ))}
        </ul>
        <p>{userPost.created_at}</p>
      </li>
    )
  }
}
export default UsersPosts
