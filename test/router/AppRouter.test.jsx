import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas <AppRouter/>', () => {
  test('Debe mostrar el LoginPage si no esta autenticado', () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText('Login').length).toBe(2)
    // screen.debug()
  })

  test('debe de mostrar el componente de marvel si esta autenticado', () => {
    render(
      <AuthContext.Provider value={{ logged: true, name: 'Sergio' }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText('Marvel').length).toBe(2)
    // screen.debug()
  })
})
