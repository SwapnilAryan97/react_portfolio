import React, { useState, useRef } from 'react'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' // Import bars icon for hamburger menu
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false) // State to manage the menu visibility
  // const navRef = useRef(null)

  const showSidebar = () => {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
  }

  const closeSideBar = () => {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
  }

  return (
    <nav>
      <ul className="sidebar nav-bar">
        <li onClick={closeSideBar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
      <ul>
        <li className="hideOnMobile">
          <a href="/">Home</a>
        </li>
        <li className="hideOnMobile">
          <a href="/about">About</a>
        </li>
        <li className="hideOnMobile">
          <a href="/contact">Contact Me</a>
        </li>
        <li onClick={showSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
