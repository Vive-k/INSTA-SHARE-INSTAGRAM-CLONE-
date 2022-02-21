import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'

import LoaderComponent from '../LoaderComponent'
import UsersPosts from '../UsersPosts'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

/*class SearchComponentSmall extends Component {
  state = {
    searchInputValue: '',
    searchResultsFetch: dataFetchStatusConstants.initial,
    usersPosts: [],
  }

  getSearchInputValue = event => {
    this.setState({searchInputValue: event.target.value})
  }

  getSearchResults = async () => {
    const {searchInputValue} = this.state
    this.setState({searchResultsFetch: dataFetchStatusConstants.loading})
    const response = await fetch(
      `https://apis.ccbp.in/insta-share/posts?search=${searchInputValue}`,
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${Cookies.get('jwtToken')}`},
      },
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({
        searchResultsFetch: dataFetchStatusConstants.success,
        usersPosts: data.posts,
      })
    }
    if (!response.ok) {
      this.setState({searchResultsFetch: dataFetchStatusConstants.failure})
    }
  }

  renderResults = () => {
    const {
      showSearchResults,
      usersPosts,
      searchResultsFetch,
      searchInputValue,
    } = this.state

    switch (searchResultsFetch) {
      case dataFetchStatusConstants.initial:
        return (
          <>
            <input
              type="search"
              placeholder="Search Caption"
              onChange={this.getSearchInputValue}
              value={searchInputValue}
            />
            <button
              type="button"
              testid="searchIcon"
              onClick={this.getSearchResults}
            >
              <FaSearch />
            </button>
            <div>
              <img
                src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645374873/Frame_1473_hqyc5m.png"
                alt="search-small-component"
              />

              <p>Search Results will be appear here</p>
            </div>
          </>
        )
      case dataFetchStatusConstants.loading:
        return (
          <>
            <input
              type="search"
              placeholder="Search Caption"
              onChange={this.getSearchInputValue}
              value={searchInputValue}
            />
            <button
              type="button"
              testid="searchIcon"
              onClick={this.getSearchResults}
            >
              <FaSearch />
            </button>
            <LoaderComponent />
          </>
        )
      case dataFetchStatusConstants.success:
        return (
          <>
            <input
              type="search"
              placeholder="Search Caption"
              onChange={this.getSearchInputValue}
              value={searchInputValue}
            />
            <button
              type="button"
              testid="searchIcon"
              onClick={this.getSearchResults}
            >
              <FaSearch />
            </button>
            <div>
              {/* for large device */ // }
     /*         {usersPosts.length === 0 ? (
                <>
                  <img
                    src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645364981/Group_e86qze.png"
                    alt="search not found"
                  />
                  <h1>Search Not Found</h1>
                  <p>Try different keyword or search again</p>
                </>
              ) : (
                <>
                  <h1>Search Results</h1>
                  <ul>
                    {usersPosts.map(eachPost => (
                      <UsersPosts key={eachPost.post_id} userPost={eachPost} />
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )
      case dataFetchStatusConstants.failure:
        return (
          <div>
            <img
              src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645203121/Group_7522-failure-view_mzata7.png"
              alt=""
            />
            <p>Something went wrong. Please try again</p>
            <button type="button" onClick={this.getSearchResults}>
              Retry
            </button>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    const {searchInputValue} = this.state

    console.log(searchInputValue)
    return <div>{this.renderResults()} </div>
  }
}




export default SearchComponentSmall
