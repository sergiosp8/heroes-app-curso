import { heroes } from '../data'

export const getHeroesByName = (name) => {
  name = name.toLowerCase().trim()
  if (name === '') return []
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name))
}
