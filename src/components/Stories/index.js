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
    <div>
      <Slider {...settings} slidesToShow={noOfSlidesToShow}>
        {userStories.map(each => (
          <div key={each.user_id}>
            <div className="each-story">
              <img
                className="each-story-image"
                src={each.story_url}
                alt="user story"
              />
              <p className="each-story-name">{each.user_name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Stories

// *** */
