import React from 'react'
import Link from 'next/link'

import Nav from '~/components/nav'

const Home: React.FC = () => (
  <>
    <Nav />
    <ul>
      <li>
        <Link href="calc">
          <a>calc</a>
        </Link>
      </li>
      <li>
        <Link href="todo">
          <a>todo</a>
        </Link>
      </li>
    </ul>
  </>
)

export default Home
