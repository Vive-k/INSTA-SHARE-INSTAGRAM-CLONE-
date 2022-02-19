import Loader from 'react-loader-spinner'

const LoaderComponent = () => (
  <div
    className="loader-container"
    testid="loader"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
  </div>
)

export default LoaderComponent
