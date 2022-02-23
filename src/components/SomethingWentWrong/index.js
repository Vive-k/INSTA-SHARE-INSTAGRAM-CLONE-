import './index.css'

const SomethingWentWrong = props => {
  const {retryFunction} = props

  const retryClicked = () => {
    retryFunction()
  }
  return (
    <div className="something-went-wrong-image-container">
      <img
        className="something-went-wrong-image"
        src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645203121/Group_7522-failure-view_mzata7.png"
        alt="failure view"
      />
      <p className="something-went-wrong-text">
        Something went wrong. Please try again
      </p>
      <button className="try-again-button" type="button" onClick={retryClicked}>
        Try again
      </button>
    </div>
  )
}

export default SomethingWentWrong

// ********** */
