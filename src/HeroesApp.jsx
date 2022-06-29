import { AuthProvide } from './auth/context/AuthProvide'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <>
      <AuthProvide>
        <AppRouter />
      </AuthProvide>
    </>
  )
}
