import React, { Component } from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import './navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(e) {
    e.preventDefault()
    console.log('clicked')
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen,
    }))
    if (this.state.isMenuOpen) {
      document.body.classList.remove('open')
    } else {
      document.body.classList.add('open')
    }
  }

  render() {
    const Icon = () => <SVG src="/logo.svg" />
    return (
      <div id="header">
        <div className={`wrapper full flex`}>
          <div className={`left`}>
            {/* <Link to="/" className={`logo`}>
              <SVG src="/logo.svg" />
            </Link> */}
            <AniLink paintDrip to="/" hex="#fccdb4" className={`logo`}>
              <SVG src="/logo.svg" />
            </AniLink>
          </div>
          <div className={`right`}>
            <ul className={`text-right show_767`}>
              <li className={`hk-bold-font`}>
                {/* <Link to="/about">About</Link> */}
                <AniLink paintDrip to="/about" hex="#fccdb4">
                  About
                </AniLink>
              </li>
              <li className={`hk-bold-font`}>
                {/* <Link to="/wedding">Weddings</Link> */}
                <AniLink paintDrip to="/wedding" hex="#fccdb4">
                  Weddings
                </AniLink>
              </li>
            </ul>
            <div
              id="menu_drawer"
              className={`center-text hide_767 ${
                this.state.isMenuOpen ? 'open' : ''
              }`}
            >
              <div className={`flex align-center justify-center`}>
                <div>
                  <ul>
                    <li className={`hk-bold-font`}>
                      {/* <Link to="/about">About</Link> */}
                      <AniLink paintDrip to="/about" hex="#fccdb4">
                        About
                      </AniLink>
                    </li>
                    <li className={`hk-bold-font`}>
                      {/* <Link to="/wedding">Weddings</Link> */}
                      <AniLink paintDrip to="/wedding" hex="#fccdb4">
                        Weddings
                      </AniLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              href="#"
              id="menu_toggle"
              className={`hide_767 ${this.state.isMenuOpen ? 'open' : ''}`}
              onClick={this.openMenu}
            >
              <span>Menu</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
