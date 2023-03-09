

import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
       <div className="logo">
       <h1>Farz</h1>
       </div>
       <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/lobby">Lobby</Link></li>
            </ul>
       </nav>
    </div>
  )
}
