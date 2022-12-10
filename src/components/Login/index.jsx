import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import useUser from 'hooks/useUser'
import './login.css'

export default function Login ({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ username, password })
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
              placeholder='username'
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </label>

          <label>
            password
            <input
              type='password'
              placeholder='password'
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>}
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
