import React from 'react'
import 'bulma/css/bulma.css'

import Nav from '~/components/molecules/nav'

export default () => (
  <>
    <Nav />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">About this Project</h1>
          <h2 className="subtitle">practice of Next.js with...</h2>
          <ul>
            <li>- Typescript for type safe.</li>
            <li>- Bulma for styling smart.</li>
          </ul>
        </div>
      </div>
    </section>
  </>
)
