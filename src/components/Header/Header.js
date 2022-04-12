import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="topbar">
    <div className="topbar-left">
    <p className='web'> WEB TECH COURSEWORK </p>
    </div>
    <div className="topbar-center">
        <ul className="topbar-list">
            <li className="topbar-list-item">HOME <i class="fa-solid fa-house"></i></li>
            <li className="topbar-list-item">ABOUT</li>
        </ul>
    </div>
    <div className="topbar-right">
    <li className="topbar-list-item"> ADD NEW</li>
    </div>
</div>
  )
}

export default Header