import {Component} from 'react'
import Cookies from 'js-cookie'

class UserProfile extends Component {
  state = {}

  componentDidMount() {
    this.getUserProfileData()
  }

  getUserProfileData = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    console.log(params)
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/users/${params.id}`,
      {
        headers: {Authorization: `Bearer ${Cookies.get('jwtToken')}`},
        method: 'GET',
      },
    )
    console.log(response)
  }

  render() {
    return <h1>User Profile</h1>
  }
}

export default UserProfile
