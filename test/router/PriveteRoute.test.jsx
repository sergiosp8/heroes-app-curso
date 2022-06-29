import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PriveteRoute } from '../../src/router/PriveteRoute'

describe('Pruebas <PrivateRoute/>', () => {
  Storage.prototype.setItem = jest.fn()

  const initialState = {
    logged: true,
    name: 'Juan'
  }
  test('Si esta autenticado, debe mostrar el children', () => {
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PriveteRoute>
            <h1>Private Route</h1>
          </PriveteRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')

    // screen.debug()
  })
})
