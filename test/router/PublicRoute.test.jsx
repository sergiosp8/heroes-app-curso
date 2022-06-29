import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from '../../src/router/PublicRoute'
import { render, screen } from '@testing-library/react'

describe('Pruebas a <PublicRoute/>', () => {
  const intitalState = {
    logged: false
  }
  test('Si no esta autenticado, debe mostrar el children', () => {
    render(
      <AuthContext.Provider value={intitalState}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Ruta publica')).toBeTruthy()

    // screen.debug()
  })

  test('Si esta autenticado, debe navegar a la ruta', () => {
    const initialState = {
      logged: true,
      name: 'Pepe'
    }
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="/" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel')).toBeTruthy()
    // screen.debug()
  })
})
