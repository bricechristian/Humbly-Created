import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import '../components/table-pricing.css'
import '../components/about.css'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location}>
        <SEO title={`About`} />
        <div className="page" id="about">
          <Navigation />
          <div className={`section hero`}>
            <div className={`wrapper lg center-text`}>
              <h1 className={`blue-color`}>
                Building the <span className={`shadow`}>perfect</span> wedding
                video is something that we obsess over.
              </h1>
            </div>
          </div>
          <div className={`section me`}>
            <div className={`wrapper lg flex align-center`}>
              <div className={`text`}>
                <div className={`inner blue-color`}>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    nam nulla error dolor voluptates culpa sit exercitationem eos
                    ad omnis, recusandae similique sunt cum minima impedit dolorem
                    molestiae voluptas provident?
                    </p> */}
                  <h2 className="shadow">A little bit about me</h2>
                  <p>
                    Hey! I'm Brice. I'm a wedding filmmaker based here in
                    Charleston, South Carolina. A few things that are near and
                    dear to me: My relationship with Jesus, my wife, my three
                    kids and trying to film any and everything. When not
                    capturing beautiful moments, you'll probably find me tucked
                    behind a computer coding something together, grabbing a bite
                    with the wifey or being dog-piled on by one of my three
                    kids.
                  </p>
                  <h2 class="shadow">Wedding Filmmaking Approach</h2>
                  <p>
                    My approach to filming a wedding is to deliver to a bride
                    and groom the most full, all encompassing recap of the
                    biggest and best moments of their day in a clear, cinematic
                    fashion. I love being able to partner with couples for their
                    entire day and capture everything from the moment they get
                    to their suite, to the moment they depart for their
                    honeymoon. So after that 10-12 hour day, we're basically
                    going to be family. And that's exactly what I consider the
                    couples I get to work with and the vendors who are also
                    involved. At the end of the day, my desire is to deliver
                    about a 6-8 minute video that completely draws you in with
                    the use of visuals through cameras and drones and with audio
                    to completely immerse you in a one of a kind experience.{' '}
                    <span
                      style={{
                        paddingBottom: '2px',
                        borderBottom: '2px solid',
                      }}
                    >
                      Wedding video pricing begins at $1750 locally.
                    </span>
                  </p>
                  {/* <p className={`name`}>Brice Christian, Founder</p> */}
                </div>
              </div>
              <div className={`image`}>
                <div className={`inner`}>
                  <div className={`image-container`}>
                    <img src="/me.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`section pricing`}>
            <div className={`wrapper md `}>
              <h2 className={`blue-color center-text`}>
                Feel free to reach out to me at{' '}
                <span className={`shadow`}>
                  <a
                    href="mailto:humblycreatedco@gmail.com"
                    style={{ textDecoration: 'none' }}
                  >
                    humblycreatedco@gmail.com
                  </a>
                </span>
              </h2>
              {/* <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className={`blue-color show_767`}
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      Basic
                      <br />
                      <span className={`price shadow`}>$1500</span>
                    </th>
                    <th>
                      Extended
                      <br />
                      <span className={`price shadow`}>$1800</span>
                    </th>
                    <th>
                      Plus
                      <br />
                      <span className={`price shadow`}>$2100</span>
                    </th>
                    <th>
                      Premium
                      <br />
                      <span className={`price shadow`}>$2300</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        Audio of well wishes from the couples to one another
                        and/or vows
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>2-3 Social Media 30sec - 1 min. teasers</div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Coverage for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Ceremony & Reception
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Final video for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        2-3 minutes
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        4-6 minutes
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        7-9 minutes
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        7-9 minutes
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Drone Footage</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        All of the original footage shot from the entire day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className={`blue-color hide_767`}
              >
                <thead>
                  <tr>
                    <th colSpan="2">
                      Basic
                      <br />
                      <span className={`price shadow`}>$1500</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        Audio of well wishes from the couples to one another
                        and/or vows
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>2-3 Social Media 30sec - 1 min. teasers</div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Coverage for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Ceremony & Reception
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Final video for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        2-3 minutes
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Drone Footage</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        All of the original footage shot from the entire day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className={`blue-color hide_767`}
              >
                <thead>
                  <tr>
                    <th colSpan="2">
                      Extended
                      <br />
                      <span className={`price shadow`}>$1800</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        Audio of well wishes from the couples to one another
                        and/or vows
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>2-3 Social Media 30sec - 1 min. teasers</div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Coverage for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Final video for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        4-6 minutes
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Drone Footage</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        All of the original footage shot from the entire day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className={`blue-color hide_767`}
              >
                <thead>
                  <tr>
                    <th colSpan="2">
                      Plus
                      <br />
                      <span className={`price shadow`}>$2100</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        Audio of well wishes from the couples to one another
                        and/or vows
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>2-3 Social Media 30sec - 1 min. teasers</div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Coverage for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Final video for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        7-9 minutes
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Drone Footage</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        All of the original footage shot from the entire day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/closemark.svg" className={`closemark`} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                className={`blue-color hide_767`}
              >
                <thead>
                  <tr>
                    <th colSpan="2">
                      Premium
                      <br />
                      <span className={`price shadow`}>$2300</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        Audio of well wishes from the couples to one another
                        and/or vows
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>2-3 Social Media 30sec - 1 min. teasers</div>
                    </td>
                    <td>
                      <div>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Coverage for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        Full Day
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Final video for the day</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        7-9 minutes
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Drone Footage</div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        All of the original footage shot from the entire day
                      </div>
                    </td>
                    <td>
                      <div className={`center-text justify-center`}>
                        <img src="/checkmark.svg" className={`checkmark`} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
