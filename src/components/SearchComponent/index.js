import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import SearchComponentContext from '../../Context/SearchComponentContext'
import UsersPosts from '../UsersPosts'
import LoaderComponent from '../LoaderComponent'
import SomethingWentWrong from '../SomethingWentWrong'
import FailureView from '../FailureView'

import './index.css'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const SearchComponent = props => {
  console.log(props)
  const {history} = props
  console.log(history)

  return (
    <SearchComponentContext.Consumer>
      {value => {
        const {
          searchDataFetchStatus,
          usersPosts,
          searchInputValue,
          updateSearchInput,
          changeStatusOfSearchComponent,
        } = value

        const intakeSearchInputText = event => {
          updateSearchInput(event.target.value)
        }

        const searchComponentStatusChange = () => {
          changeStatusOfSearchComponent()
        }

        switch (searchDataFetchStatus) {
          case dataFetchStatusConstants.initial:
            return (
              <>
                <div className="small-device-component">
                  <input
                    type="search"
                    placeholder="Search Caption"
                    onChange={intakeSearchInputText}
                    value={searchInputValue}
                  />
                  <button
                    type="button"
                    testid="searchIcon"
                    onClick={searchComponentStatusChange}
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
                </div>
                <div className="large-device-component">
                  <FailureView retryFunction={searchComponentStatusChange} />
                </div>
              </>
            )
          case dataFetchStatusConstants.loading:
            return (
              <div>
                <div className="small-device-component">
                  <input
                    type="search"
                    placeholder="Search Caption"
                    onChange={intakeSearchInputText}
                    value={searchInputValue}
                  />
                  <button
                    type="button"
                    testid="searchIcon"
                    onClick={searchComponentStatusChange}
                  >
                    <FaSearch />
                  </button>
                </div>
                <LoaderComponent />
              </div>
            )
          case dataFetchStatusConstants.success:
            return (
              <>
                <div className="small-device-component">
                  <input
                    type="search"
                    placeholder="Search Caption"
                    onChange={intakeSearchInputText}
                    value={searchInputValue}
                  />
                  <button
                    type="button"
                    testid="searchIcon"
                    onClick={searchComponentStatusChange}
                  >
                    <FaSearch />
                  </button>
                </div>
                <div>
                  {/* for large device */}
                  {usersPosts.length === 0 ? (
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
                          <UsersPosts
                            key={eachPost.post_id}
                            userPost={eachPost}
                          />
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
                <SomethingWentWrong
                  retryFunction={searchComponentStatusChange}
                />
              </div>
            )
          default:
            return null
        }
      }}
    </SearchComponentContext.Consumer>
  )
}

export default withRouter(SearchComponent)
