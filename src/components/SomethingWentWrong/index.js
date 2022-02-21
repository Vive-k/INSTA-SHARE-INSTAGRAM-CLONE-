const SomethingWentWrong = props => {
  const {retryFunction} = props

  const retryClicked = () => {
    retryFunction()
  }
  return (
    <div>
      <img
        src="https://res.cloudinary.com/duqlsmi22/image/upload/v1645203121/Group_7522-failure-view_mzata7.png"
        alt="failure view"
      />
      <p>Something went wrong. Please try again</p>
      <button type="button" onClick={retryClicked}>
        Try again
      </button>
    </div>
  )
}

export default SomethingWentWrong
