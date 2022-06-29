import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavegateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`} className="img-thumbnail " alt={hero.superhero} />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group lis-group-flush">
          <li className="list-grou-item">
            <b>Alter ego :</b> {hero.alter_ego}
          </li>
          <li className="list-grou-item">
            <b>Publisher :</b> {hero.publisher}
          </li>
          <li className="list-grou-item">
            <b>First appearence :</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-primary" onClick={onNavegateBack}>
          Back
        </button>
      </div>
    </div>
  )
}
