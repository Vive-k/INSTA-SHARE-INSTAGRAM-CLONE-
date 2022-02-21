const FailureView = props => {
  const {retryFunction} = props

  const retry = () => {
    retryFunction()
  }

  return (
    <div>
      <h1>check</h1>
      <div>
        <img
          src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645180684/alert-triangle-failure-view_htbcnn.png"
          alt="failure view"
        />
      </div>
      <p>Something went wrong. Please try again</p>
      <button type="button" onClick={retry}>
        Try again
      </button>
    </div>
  )
}

export default FailureView
