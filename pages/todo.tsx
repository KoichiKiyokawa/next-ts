import React from 'react'

import Nav from '~/components/molecules/nav'
import TodoList from '~/components/molecules/todo_list'
import Space from '~/components/atoms/space'

export default () => (
  <>
    <Nav />
    <Space />
    <div className="container">
      <TodoList />
    </div>
  </>
)
