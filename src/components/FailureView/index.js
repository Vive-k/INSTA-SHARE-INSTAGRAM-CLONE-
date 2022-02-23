import './index.css'

const FailureView = props => {
  const {retryFunction} = props

  const retry = () => {
    retryFunction()
  }

  return (
    <div className="failure-view-container">
      <img
        className="failure-view-image"
        src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645180684/alert-triangle-failure-view_htbcnn.png"
        alt="failure view"
      />

      <p className="went-wrong-text">Something went wrong. Please try again</p>
      <button className="failure-retry-button" type="button" onClick={retry}>
        Try again
      </button>
    </div>
  )
}

export default FailureView

// *************
