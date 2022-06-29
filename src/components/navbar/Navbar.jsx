import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './navbar.css'

import Logo from "../images/logo.png"

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
          <div>INICIO</div>
          <div>SERVICIOS</div>
          <div>GALERIA</div>
          <div>MANICURE</div>
          <div>CONTACTENOS</div>
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