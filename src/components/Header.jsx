import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
 <>
 <nav>
    <h1>Tech Star</h1>

    <main>
      <ul>
        <li><HashLink to="/#home">Home</HashLink></li>
        <li><HashLink to="/#about">About</HashLink></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><HashLink to="/#brands">Brands</HashLink></li>
        <li><Link to="/services">Services</Link></li>
       
      </ul>
    </main>
 </nav>


 </>
  )
}

export default Header
