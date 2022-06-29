import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes'
import { PriveteRoute } from './PriveteRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PriveteRoute>
              <HeroesRoutes />
            </PriveteRoute>
          }
        />
      </Routes>
    </>
  )
}
