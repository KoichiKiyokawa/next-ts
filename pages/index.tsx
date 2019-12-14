import React from 'react'
import Link from 'next/link'

import Nav from '~/components/nav'

const Home: React.FC = () => (
  <>
    <Nav />
    <Link href="calc">
      <a>calc</a>
    </Link>
  </>
)

export default Home
