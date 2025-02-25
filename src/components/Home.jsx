import React, { useEffect ,useRef} from 'react'
import pdf from '../pdf/ANKIT_RESUME.pdf'
import ankit from './data/ankit.jpg'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options = {
      strings:["Welcome to my profile","i am Ankit","i am a frentend developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current,options)

    return()=>{
      typed.destroy()
    }
       
  },[])
  return (
    <>
    <div className="container home" id='home'>
      <div className="left"
      data-aos="fade-up-left"
      data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a 
        href={pdf}  
        download="Resume.pdf"
        className='btn btn-outline-warning my-3'>Downlode Resume</a>
      </div>
      <div className="right"
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <div className="img">
       
          <img src={ankit} alt='Ankit'/>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home