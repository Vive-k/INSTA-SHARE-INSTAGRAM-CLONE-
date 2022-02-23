import Header from '../Header'
import SearchComponent from '../SearchComponent'
import SearchComponentContext from '../../Context/SearchComponentContext'
import UserProfileCoreComponent from '../UserProfileCoreComponent'

const UserProfile = () => (
  <div>
    <Header />

    <SearchComponentContext.Consumer>
      {value => {
        const {showSearchComponent} = value
        return (
          <>
            {showSearchComponent ? (
              <>
                <div>
                  <SearchComponent />
                </div>
              </>
            ) : (
              <UserProfileCoreComponent />
            )}
          </>
        )
      }}
    </SearchComponentContext.Consumer>
  </div>
)

export default UserProfile

// ********** */
