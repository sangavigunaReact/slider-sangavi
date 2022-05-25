import React,{useState} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import './imagesslider.css';

const Imageslider = ({slides}) => {
    const [current,setcurrent]=useState(0);
    const length=slides.length;
    const nextslide = () =>{
        setcurrent(current === length-1 ? 0 : current+1)
    }
    const prevslide =() =>{
        setcurrent(current === 0 ? length-1 : current-1)
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
  return (
    <div className='container'>
    <section className='slider'>
        <FaArrowAltCircleLeft className="leftarrow" onClick={prevslide}/>
        <FaArrowAltCircleRight className="rightarrow" onClick={nextslide}/>
      {slides.map((item,index) => {
          return(
            <div classname={index === current ? "slide active" : "slide"} key={index}>
               {index === current && (<img src={item.image} alt="slider image" className='image'/>)} 
            </div>
          )
      })}
    </section>
    </div>
  )
}

export default Imageslider;
