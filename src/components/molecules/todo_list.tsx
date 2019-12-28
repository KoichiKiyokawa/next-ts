import React, { useState } from 'react'

import Todo from '~/components/atoms/todo'

const TodoList = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<tTodo[]>([])

  const undoneTodos = () => todos.filter(({ done }) => !done)
  const doneTodos = () => todos.filter(({ done }) => done)

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length, text: input, done: false }])
    setInput('')
  }

  const handleEnter = (e:React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAddTodo()
  }

  /**
   * willToggleIdで指定されたidのtodoのdoneを切り替える
   */
  const toggleDone = (willToggleId: number) => {
    setTodos(
      todos.map(({ id, text, done }) => ({
        id,
        text,
        done: willToggleId === id ? !done : done
      }))
    )
  }

  return (
    <>
      <div className="one-line">
        <input
          type="text"
          onChange={handleInput}
          onKeyDown={handleEnter}
          value={input}
          className="input is-rounded one-line__content"
        />
        <button className="button one-line__content" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <p>Undone Todos</p>
      <ul>
        {undoneTodos().length === 0 && <p>There is no undone todos!</p>}
        {undoneTodos().map(todo => (
          <Todo {...todo} toggleDone={toggleDone}/>
        ))}
      </ul>
      <p>Done Todos</p>
      <ul>
        {doneTodos().length === 0 && <p>There is no done todos!</p>}
        {doneTodos().map(todo => (
          <Todo {...todo} toggleDone={toggleDone} />
        ))}
      </ul>
      <style jsx>
        {`
          .one-line {
            display: flex;
          }
          .one-line__content {
            margin-left: 10px;
          }
          .checkbox input {
            margin-right: 5px;
          }
        `}
      </style>
    </>
  )
}

export default TodoList
