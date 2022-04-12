import React from 'react'
import './Sidebar.css'

function Sidebar() {
return (
    <div className='sidebar-section'>
    <div className='sidebar-subsection'>
        <span className='sidebar-titles'>About me </span>
        <img className='sidebar-image' src='https://media-exp1.licdn.com/dms/image/C4E03AQFaUgwTmmCHuQ/profile-displayphoto-shrink_800_800/0/1649314037336?e=1654732800&v=beta&t=BsbEQCbISTP_UAm7OIQK184Zu89jIXRi-CYlhardAMQ' alt='pic-sidebar2' />
        <p className='sidebar-about-text'> My name is Ademola Jegede, And this is my coursework for Web Technologies. I am a Msc student in Computer Science my student ID is 2122998. this is not a fully responsive webpage it's just to implement crud
        </p>
    </div>

    <div className='sidebar-subsection'>
    <span className='sidebar-titles'>Follow me on:</span>
    <div className='sidebar-socials-icon'>
        <i className="sidebar-socials-icon fa-brands fa-twitter"></i>
        <i className="sidebar-socials-icon fa-brands fa-linkedin"></i>
        <i className="sidebar-socials-icon fa-brands fa-instagram"></i>  
        <i className="sidebar-socials-icon fa-brands fa-facebook"></i>
        <i className="sidebar-socials-icon fa-brands fa-twitch"></i>

    </div>


    </div>


    </div>
)
}

export default Sidebar



// Student Name: Ademola Jegede,
// Student ID: 2122998,
// course: Web Technologies