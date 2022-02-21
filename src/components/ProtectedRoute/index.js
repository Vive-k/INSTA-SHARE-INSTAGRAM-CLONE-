import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  if (Cookies.get('jwt_token') === undefined) {
    /* if jwt token does not exists */ return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
