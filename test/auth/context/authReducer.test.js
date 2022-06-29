import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en authReducer', () => {
  const initialState = {
    logged: false
  }
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer(initialState, {})
    expect(state).toEqual(initialState)
  })

  test('Debe de retornar el estado con el usuario logueado', () => {
    const action = {
      type: types.login,
      payload: 'Juan'
    }
    const state = authReducer(initialState, action)
    expect(state).toEqual({
      logged: true,
      name: 'Juan'
    })
  })

  test('debe hacer logout', () => {
    const action = {
      type: types.logout
    }
    const state = authReducer({ logged: true, name: 'Juan' }, action)
    expect(state).toEqual({
      logged: false
    })
  })
})
