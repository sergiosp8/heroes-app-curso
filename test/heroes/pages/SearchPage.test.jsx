import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Pruebas en Search Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('debe de mostrarse con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
    // screen.debug()
  })

  test('debe de mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

    const alert = screen.getByLabelText('danger')
    expect(alert.style.display).toBe('none')

    // screen.debug()
  })

  test('debe de mostrar el div danger cuando no hay resultados', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )
    const alert = screen.getByLabelText('danger')
    expect(alert.style.display).toBe('')
    // screen.debug()
  })

  test('debe de llamar el navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'superman' } })
    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect(mockedUsedNavigate).toHaveBeenCalledWith('?q=superman')
    // screen.debug()
  })
})
