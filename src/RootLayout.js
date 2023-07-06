import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <header>
          <a href=""><h1>MySite::1</h1></a>
          <nav>
            <ul className="lists">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='help'>Help</NavLink>
            </ul>
          </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
