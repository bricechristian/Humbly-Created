// https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js

import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import YouTube from 'react-youtube'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../components/weddings.css'

class WeddingPostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const currentPost = get(this.props, 'data.contentfulWedding')
    const allPosts = get(this.props, 'data.allContentfulWedding.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const opts = {
      height: '400',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    function getUnique(arr, comp) {
      //store the comparison  values in array
      const unique = arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & return unique objects
        .filter(e => arr[e])
        .map(e => arr[e])

      return unique
    }

    const arr = allPosts.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
    }))

    const uniqueArr = getUnique(arr, 'title')

    const settings = {
      customPaging: function(i, index) {
        return <a key={i}> {i + 1} </a>
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      swipeToSlide: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    }

    const bgImage = {
      background: `url(/${currentPost.slug}-poster.jpg)`,
    }

    return (
      <Layout location={this.props.location}>
        <SEO title={`${currentPost.title}`} />
        <div className={`page single`}>
          <Navigation />
          <div className={`section hero flex align-center justify-center`}>
            <div className={'wrapper'}>
              <h1 className={`white-color shadow`}> {currentPost.title} </h1>
            </div>
            <div className={`bg-fade pink-bg`}></div>
            <div className={`video-container show_767`}>
              <video
                className={`background-video`}
                loop
                muted
                autoPlay
                playsInline
                preload={'auto'}
              >
                <source src={`/${currentPost.slug}.mp4`} type="video/mp4" />
              </video>
            </div>
            <div
              className={`image-container bg hide_767`}
              style={bgImage}
            ></div>
          </div>
          <div className={`section main`}>
            <div className={`wrapper md center-text`}>
              <YouTube
                videoId={currentPost.video_link}
                opts={opts}
                onReady={this._onReady}
              />
              <div className={`flex space-between details`}>
                <div className={`bio blue-color`}>
                  {currentPost.about.json.content.map(item => {
                    return (
                      <p key={item.content[0].value.substr(0, 3)}>
                        {item.content[0].value}
                      </p>
                    )
                  })}
                </div>
                <div className={`date blue-color hk-bold-font text-right`}>
                  {currentPost.date}
                </div>
              </div>
              <div className={`photography flex blue-color text-left`}>
                <div className={`photographer`}>
                  <p> Photography By: </p>
                  <a
                    href={currentPost.photographer_website}
                    className={`hk-bold-font shadow`}
                    target="_blank"
                  >
                    {currentPost.photographer_name}
                  </a>
                </div>
                <div className={`slider`}>
                  <Slider {...settings}>
                    <div>
                      <img src={`/${currentPost.slug}-1.jpg`} />
                    </div>
                    <div>
                      <img src={`/${currentPost.slug}-2.jpg`} />
                    </div>
                    <div>
                      <img src={`/${currentPost.slug}-3.jpg`} />
                    </div>
                    <div>
                      <img src={`/${currentPost.slug}-4.jpg`} />
                    </div>
                    <div>
                      <img src={`/${currentPost.slug}-5.jpg`} />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default WeddingPostTemplate

export const pageQuery = graphql`
  query WeddingPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulWedding(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "MMMM Do, YYYY")
      video_link
      about {
        json
      }
      photographer_name
      photographer_website
    }
    allContentfulWedding(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          about {
            json
          }
        }
      }
    }
  }
`
