import { types } from '../../../src/auth/types/types'

describe('Pruebas en el archivo types', () => {
  test('debe de regresar estos types', () => {
    expect(types).toEqual({
      login: 'LOGIN',
      logout: 'LOGOUT'
    })
  })
})
