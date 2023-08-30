import React from 'react'
// import { Navigate } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <a href="/">DISH-IS-READY</a>
      </div>
      <ul className="nav">
          <li>Donation</li>
          <li>Sign in</li>
      </ul>
    </div>
  )
}

export default Header