import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import MyProfile from './components/MyProfile'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {showSearchComponent: false, searchInputValue: ''}

  changeStatusOfSearchComponent = () => {
    this.setState(prevState => ({
      showSearchComponent: !prevState.showSearchComponent,
    }))
  }

  takingSearchInput = eventTargetValueFromHeaderInputField => {
    this.setState({searchInputValue: eventTargetValueFromHeaderInputField})
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/my-profile" component={MyProfile} />
        <ProtectedRoute exact path="/users/:id" component={UserProfile} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App
