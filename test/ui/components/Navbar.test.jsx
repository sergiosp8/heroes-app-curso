import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Prubeas <Navbar/>', () => {
  beforeEach(() => jest.clearAllMocks())
  test('Debe de mostrar el nombre del usuario logueado', () => {
    render(
      <AuthContext.Provider value={{ logged: true, name: 'Juan' }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Juan')).toBeTruthy()
    // screen.debug()
  })

  test('debe de llamar a logout y navegar cuando se hace click en el boton', () => {
    const logout = jest.fn()

    render(
      <AuthContext.Provider value={{ name: 'Juan', onLogout: logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const button = screen.getByText('Logout')
    fireEvent.click(button)
    expect(logout).toHaveBeenCalled()
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', { replace: true })
    screen.debug()
  })
})
