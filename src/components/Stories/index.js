import Slider from 'react-slick'

import './index.css'

const Stories = props => {
  const {noOfSlidesToShow, userStories} = props
  const settings = {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Slider
        {...settings}
        slidesToShow={noOfSlidesToShow}
        style={{
          width: '92%',
        }}
      >
        {userStories.map(each => (
          <div key={each.user_id}>
            <div>
              <div>
                <img src={each.story_url} alt="user story" />
                <p>{each.user_name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Stories
