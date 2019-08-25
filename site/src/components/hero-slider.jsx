import React from 'react'
import get from 'lodash/get'
import YouTube from 'react-youtube'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hero-slider.css'

class HeroSlider extends React.Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return i < 10 ? <a>0{i + 1}</a> : <a>{i + 1}</a>
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      swipeToSlide: false,
      autoplay: true,
      autoplaySpeed: 12000,
      slidesToShow: 1,
      slidesToScroll: 1,
      auseOnHover: false,
    }
    const posts = get(this.props, 'weddings')

    console.log(posts)

    return (
      <Slider {...settings}>
        {posts.map(item => {
          return (
            <div key={item.slug}>
              <div className={`video-container`}>
                <video
                  className={`background-video`}
                  loop
                  preload
                  playsinline
                  webkit-playsinline
                  muted
                  autoPlay
                >
                  <source src={`${item.slug}.mp4`} type="video/mp4" />
                  <source src={`${item.slug}.ogg`} type="video/ogg" />
                </video>
              </div>
              <h2 className={`white-color`}>{item.title}</h2>
              <a
                href={`wedding/${item.slug}`}
                className={`uppercase hk-bold-font white-color`}
              >
                Watch More
              </a>
            </div>
          )
        })}
      </Slider>
    )
  }
}

export default HeroSlider
