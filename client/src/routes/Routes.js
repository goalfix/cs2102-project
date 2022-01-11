import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import AllDepartments from '../pages/AllDepartments'
import LandingPage from '../pages/LandingPage'

export const Routes = () => (
  <Switch>
    <Route path="/" element={<LandingPage />} />
    <Route path="/departments" element={<AllDepartments />} />
  </Switch>
)
