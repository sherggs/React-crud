import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="topbar">
    <div className="topbar-left">
    <p className='web'> <a href='/'> CRUD STUDENT DATA <i class="fa-solid fa-house"></i></a></p>
    </div>
    <div className="topbar-center">

    </div>
    <div className="topbar-right">
    <li className="topbar-list-item"> <a href='/add'> ADD NEW</a> </li>
    <li className="topbar-list-item"> <a href='/about'> ABOUT</a></li>

    </div>
</div>
  )
}

export default Header