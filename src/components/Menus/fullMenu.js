import React from 'react'
import {Link} from 'react-router-dom'

const FullMenu = () => {
  return (
    <>
    <nav>
      <ul className="">
        <li>
          <Link to ='/about' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">About Us</Link>
        </li>
        <li>
          <Link to ='/locations' className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans">Locations</Link>
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
    </>
  )
}

export default FullMenu
