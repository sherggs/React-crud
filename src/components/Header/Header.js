import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="topbar">
    <div className="topbar-left">
        <i className="topbar-social-icon fab fa-instagram"></i>
        <i className="topbar-social-icon fab fa-facebook"></i>
        <i className="topbar-social-icon fab fa-linkedin"></i>
        <i className="topbar-social-icon fab fa-twitter"></i>
    </div>
    <div className="topbar-center">
        <ul className="topbar-list">
            <li className="topbar-list-item">HOME <i class="fa-solid fa-house"></i></li>
            <li className="topbar-list-item">ABOUT</li>
            <li className="topbar-list-item"> ADD NEW</li>
        </ul>
    </div>
    <div className="topbar-right">
        <i className="topbar-search fas fa-search"></i>
    </div>
</div>
  )
}

export default Header