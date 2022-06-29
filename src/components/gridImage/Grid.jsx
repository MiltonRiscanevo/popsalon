import React from 'react'
import "./gridImage.css"
import Popsalon1 from "../images/popsalon1.jpg"
import Popsalon2 from "../images/popsalon2.jpg"
import Popsalon3 from "../images/popsalon3.jpg"
import Popsalon4 from "../images/popsalon4.jpg"
import Popsalon5 from "../images/popsalon5.jpg"
import Popsalon6 from "../images/popsalon6.jpg"
import Popsalon7 from "../images/popsalon7.jpg"
import Popsalon8 from "../images/popsalon8.jpg"
import Popsalon9 from "../images/popsalon9.jpg"
import Popsalon10 from "../images/popsalon10.jpg"
import Popsalon11 from "../images/popsalon11.jpg"
import Popsalon12 from "../images/popsalon12.jpg"

const Grid = () => {
  return (
    <div className='grid_container'>
        <img src={Popsalon1} alt="pop1" className='wile' />
        <img src={Popsalon2} alt="pop2" className='tall'/>
        <img src={Popsalon2} alt="pop3"  />
        <img src={Popsalon3} alt="pop4" className='tall' />
        <img src={Popsalon4} alt="pop5" />
        <img src={Popsalon5} alt="pop6" className='wile'/>
        <img src={Popsalon6} alt="pop7" />
        <img src={Popsalon7} alt="pop8" className='tall'/>
        <img src={Popsalon8} alt="pop9" />
        <img src={Popsalon9} alt="pop10" className='wile'/>
        <img src={Popsalon10} alt="pop11" />
        <img src={Popsalon11} alt="pop12" className='tall'/>
    </div>
  )
}

export default Grid