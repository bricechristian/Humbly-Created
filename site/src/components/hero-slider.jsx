import React from 'react'
import get from 'lodash/get'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby'
import Slider from 'react-slick'
import { Player } from 'video-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import './video-react.css'
import './hero-slider.css'

class HeroSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        active: true,
      })
    }, this.props.wait)
  }

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
      autoplaySpeed: 4000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    }
    const posts = get(this.props, 'weddings')

    return (
      <>
        {this.state.active && (
          <Slider {...settings}>
            {posts.map(item => {
              const bgImage = {
                background: `url(/${item.slug}-poster.jpg)`,
              }
              return (
                <div key={item.slug}>
                  <div className={`video-container show_767`}>
                    <video
                      className={`background-video`}
                      poster={`/${item.slug}-poster.jpg`}
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload={'auto'}
                      onCanPlayThrough={() => {
                        this.props.loadingIsFinished()
                      }}
                    >
                      <source src={`${item.slug}.mp4`} type="video/mp4" />
                    </video>
                    {/* <Player
                      className={`background-video`}
                      playsInline
                      autoPlay
                      preload="auto"
                      muted
                      poster={`${item.slug}-poster.jpg`}
                      src={`${item.slug}.mp4`}
                    /> */}
                  </div>
                  <div
                    className={`image-container bg hide_767`}
                    style={bgImage}
                  ></div>
                  <div className={`wrapper`}>
                    <h2 className={`white-color shadow`}>{item.title}</h2>
                  </div>
                  {/* <a
                    href={`wedding/${item.slug}`}
                    className={`uppercase hk-bold-font white-color`}
                  >
                    Watch More
                  </a> */}
                  <Link
                    to={`/wedding/${item.slug}`}
                    className={`uppercase hk-bold-font white-color`}
                  >
                    Watch Full Video
                  </Link>
                </div>
              )
            })}
          </Slider>
        )}
      </>
    )
  }
}

export default HeroSlider
