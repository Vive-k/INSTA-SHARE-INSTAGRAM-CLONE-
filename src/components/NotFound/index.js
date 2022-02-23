import './index.css'

const NotFound = props => {
  const routeToHomePage = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="page-not-found-page">
      <img
        src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645203090/erroring_1_page_not_found_q1v6uu.png"
        alt="page not found"
      />
      <h1>Page Not Found</h1>
      <p className="we-are-sorry-text">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <button
        className="page-not-found-home-button"
        type="button"
        onClick={routeToHomePage}
      >
        Home Page
      </button>
    </div>
  )
}

export default NotFound

// ************** */
