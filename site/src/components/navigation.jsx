import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import './navigation.css'

const Icon = () => <SVG src="/logo.svg" />

export default () => (
  <div id="header">
    <div className={`wrapper full flex`}>
      <div className={`left`}>
        <Link to="/" className={`logo`}>
          <SVG src="/logo.svg" />
        </Link>
      </div>
      <div className={`right`}>
        <ul className={`text-right`}>
          <li className={`hk-bold-font`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`hk-bold-font`}>
            <Link to="/wedding">Weddings</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
