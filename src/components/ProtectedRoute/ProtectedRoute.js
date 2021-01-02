import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isLoggedIn,component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-up" />
        )
      }
    </Route>
  )
}

export default ProtectedRoute
