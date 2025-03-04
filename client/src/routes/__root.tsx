import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'
import '../flourite_ui.scss'
import '../style.scss'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="horizontal-flex panel body-margin">
        <Link to="/" className="flourite-button">
          Home
        </Link>
        {' '}
        <Link to="/testPage" className="flourite-button">
          Home 2
        </Link>
      </div>
      <div className='page'>
        <Outlet />
      </div>
    </>
  ),
})