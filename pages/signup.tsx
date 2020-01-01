import React, { useState } from 'react'
import firebase from 'firebase'

import '~/plugins/firebase'
import Nav from '~/components/organisms/nav'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error.message))
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Email</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  type="email"
                  onChange={handleInputEmail}
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Password</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  type="email"
                  onChange={handleInputPassword}
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button" onClick={handleSignUp}>
              サインイン
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
