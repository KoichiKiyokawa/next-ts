import React from 'react'
import Link from 'next/link'
import 'bulma/css/bulma.css'

import { makeClass } from '~/utils/klass'

const Nav: React.FC = () => {
  const [active, setActive] = React.useState(false)
  const toggleActive = () => {
    setActive(prev => !prev)
  }

  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a
            className="is-size-3 has-text-light"
            style={{ padding: '8px 24px' }}
          >
            Next-Practice
          </a>
        </Link>
        {/* レスポンシブ */}
        <a
          role="button"
          {...makeClass({
            'navbar-burger': true,
            'is-boxed': true,
            'is-active': active
          })}
          data-target="navbarMenu"
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${active ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link href="about">
            <a className="navbar-item">About</a>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Nav
