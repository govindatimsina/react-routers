import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div>
      <h2>How may I halp you?</h2>
      <NavLink to='faq'>FAQ</NavLink>
      <NavLink to='contact'>Contact</NavLink>

      <Outlet/>
    </div>
  )
}
