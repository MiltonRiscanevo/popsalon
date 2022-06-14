import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <>
       <header className='navbar_container'>
        <div className='icons_navbar'>Icono</div>
        <div className={`container_options ${clicked ? 'active':'' } `}>
          <div>INICIO</div>
          <div>SERVICIOS</div>
          <div>YESENIA</div>
          <div>GALERIA</div>
          <div>BONO DE REGALO</div>
          <div>KERATINA</div>
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