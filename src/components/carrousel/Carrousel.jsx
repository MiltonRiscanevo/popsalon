import React,{useRef} from 'react'
import './carrousel.css'
import Images from '../images.json'
import Izquierda from '../images/izquierda.svg'
import Derecha from '../images/derecha.svg'
//import { useEffect } from 'react'




const Carrousel = () => {
    
    const slideshow=useRef(null)
    //const intervaloSlideShow = useRef(null)

    const anterior =()=>{
        if (slideshow.current.children.length >0) {
            const index = slideshow.current.children.length -1
            const lastElement = slideshow.current.children[index]
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

            slideshow.current.style.transition =`none`

            const sizeSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform =`translateX(-${sizeSlide}px)`

            setTimeout(()=>{
                slideshow.current.style.transition =`5000ms ease-out all`
                slideshow.current.style.transform = `translateX(0)`
            },30)

        }
    }
    const siguiente =()=>{
        if (slideshow.current.children.length > 0) {
            const firstElement =slideshow.current.children[0]

            slideshow.current.style.transition = `5000ms ease-out all`

            const sizeSlide = slideshow.current.children[0].offsetWidth;
            console.log(sizeSlide);

            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transition =()=>{
                slideshow.current.style.transition = `none`
                slideshow.current.style.transform = `translateX(0)`
                slideshow.current.appendChild(firstElement)

                slideshow.current.removeEventListener(`transitionend`, transition)
            }

            slideshow.current.addEventListener(`transitionend`, transition)
        }
    }

//    useEffect(() => {
//      intervaloSlideShow.current = setInterval(()=>{
//        siguiente()
//      },5000)
//
//      slideshow.current.addEventListener('mouseenter',()=>{
//        clearInterval(intervaloSlideShow.current)
//      })
//
//      slideshow.current.addEventListener('mouseleave',()=>{
//        intervaloSlideShow.current =setInterval(()=>{
//            siguiente()
//          },5000)
//      })
//    }, [])
    

  return (
    <div className='main'>
        <h1>POP SALON BEAUTY HAIR</h1>
        <div className='carrousel_container' ref={slideshow}>
            {Images.map((item)=>(
                <div key={item.id} className='slide'>
                    <h2 className='title_slide'>{item.title}</h2>
                    <img src={item.image} alt="muestra" className='image' />
                </div>
            ))}
            
        </div>
        <div className='controls'>
            <button className='Buttons izquierda' onClick={anterior} >
                <img src={Izquierda} alt='arrows' />
            </button>
            <button className='Buttons derecha' onClick={siguiente}> 
                <img src={Derecha} alt='arrows' />
            </button>
        </div>
    </div>
  )
}

export default Carrousel