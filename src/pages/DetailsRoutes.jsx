

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'

const DetailsRoutes = () => {
  return (
    <Routes>
        <Route path='/credit-Repor/Personal-Information' element={<Home/>} />
    </Routes>
  )
}

export default DetailsRoutes