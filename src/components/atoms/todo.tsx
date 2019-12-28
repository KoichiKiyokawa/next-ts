import React from 'react'

type Props = tTodo & {
  toggleDone: (id: number) => void
}

const Todo: React.FC<Props> = ({ id, text, done, toggleDone }) => (
  <li key={id}>
    <label className="checkbox">
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={() => toggleDone(id)}
      />
      {text}
    </label>
  </li>
)

export default Todo
