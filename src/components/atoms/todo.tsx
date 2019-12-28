import React from 'react'

type Props = tTodo & {
  toggleDone: (id: number) => void
}

const Todo: React.FC<Props> = ({ id, text, done, toggleDone }) => (
  <>
    <li>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => toggleDone(id)}
        />
        {text}
      </label>
    </li>
    <style jsx>
      {`
        .checkbox input {
          margin-right: 5px;
        }
      `}
    </style>
  </>
)

export default Todo
