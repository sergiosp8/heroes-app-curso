import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
  logged: false
}

const init = () => {
  const localUser = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!localUser?.logged,
    name: localUser?.name
  }
}

export const AuthProvide = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init)

  const onLogin = (name = '') => {
    dispatch({ type: 'LOGIN', payload: name })
    localStorage.setItem('user', JSON.stringify({ logged: true, name }))
  }

  const onLogout = () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('user')
  }

  return <AuthContext.Provider value={{ ...authState, onLogin, onLogout }}>{children}</AuthContext.Provider>
}
