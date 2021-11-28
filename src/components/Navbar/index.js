import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TirpokLogo from '../../assets/tirpok-logo.png'

const Navbar = () => {

  const [navBar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const initial = 'transition-all lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0'
  const active = 'transition-all lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0 bg-primary'

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={navBar ? active : initial}>
      <div className="flex-1 flex justify-between items-center">
        <img className="h-20 m-2 float-left" src={TirpokLogo} alt="hanger with text tirpok more than just a cleaners" />
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
            <li>
              <Link to ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">About Us</Link>
            </li>
            <li>
              <Link to ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Locations</Link>
            </li>
            <li>
              <Link to ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Services</Link>
            </li>
            <li>
              <Link to ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Coupons</Link>
            </li>
            <li>
              <Link to ='/' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
