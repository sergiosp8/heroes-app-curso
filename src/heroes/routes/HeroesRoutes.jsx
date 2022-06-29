import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { DcPage, MarvelPage, HeroPage, SearchPage } from '../../heroes'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}
