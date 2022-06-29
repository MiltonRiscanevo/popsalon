import React from 'react'
import "./gridImage.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Auth = () => {
  useEffect(() => {
    Aos.init({
      duration:600
    })  
  }, [])
  
  

  return (
    <div className='biography' data-aos="fade-up">
        <div className='background1'></div>
        <div className='background2'>
            <h1 className='auth' data-aos="slide-left">Pop Salon </h1>
            <p data-aos="slide-rigth">Beauty artist to colombian people</p>
            <p data-aos="slide-up">  
            pop salón se enfoca en uno de los problemas más frecuentes 
            de la década femenina “la seguridad constante de la belleza” 
            sin lugar a duda las mujeres año tras año se encaminan hacia 
            un rumbo sin fin, subiendo a pasos incontables e inimaginables 
            unas escaleras que tienen pisos de grandeza y belleza, 
            las mujeres del mundo han demostrado sus capacidades de actitud 
            y aptitud para bombardear los ideales de  la perfección, 
            aunque tenemos claro el concepto de que la inteligencia 
            seduce lo que un cuerpo ya no, los estándares de belleza nos ponen
            a la vanguardia nuevas técnicas para hacerlas lucir mas hermosas 
            de lo que ya sus sueños las hacen reflejar, es por eso que hoy 
            pop salón desea que todas las mujeres que hagan parte y se sientan 
            más hermosas con sus servicios por que no solo brillaran con estilo 
            y profesionalidad si no con el glamour e imagen que les  ayudaremos a lucir           
            </p>
        </div>
    </div>
  )
}

export default Auth