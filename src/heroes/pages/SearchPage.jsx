import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'

import { getHeroesByName } from '../helpers'
import { HeroCard } from '../components'
import queryString from 'query-string'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange } = useForm({ searchText: q })
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form aria-label="form" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a horo"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="mt-1 btn btn-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          {/* {q === '' ? (
            <div className="alert alert-primary">Search a Hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )} */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            aria-label="danger"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>

          <div>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
