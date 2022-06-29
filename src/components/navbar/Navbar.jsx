import React from 'react'
import { useState } from 'react'
import './navbar.css'
import Logo from "../images/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <>
       <header className='navbar_container'>
        <img src={Logo} className='icons_navbar'  alt="logo" />
        <div className={`container_options ${clicked ? 'active':'' } `}>
          <Link to="/" className='links'>INICIO</Link>
          <div>SERVICIOS</div>
          <div>GALERIA</div>
          <div>MANICURE</div>
          <Link to="/contactus" className='links'>CONTACTENOS</Link>
        </div>
        <button className='btn_burger' onClick={handleClick}>
            <span>POP</span>
            <span>POP</span>
            <span>POP</span>
          </button>
       </header> 
    </>
  )
}

export default Navbar