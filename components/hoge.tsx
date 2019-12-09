import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Hoge = () => {
  const [count, setCount] = useState(0)
  const [id, setID] = useState(null)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  useEffect(() => {
    axios
      .get('https://api.fungenerators.com/identity/person/name', {
        headers: {}
      })
      .then(res => {
        setID(res.data.contents.names[0])
      })
  }, [count])

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>

      <p>id: {id}</p>
    </div>
  )
}

export default Hoge
