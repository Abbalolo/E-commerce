import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  // auto scroll
  // let autoScroll = false;
  // let slideInterval;


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0  ? slideLength -1 : currentSlide - 1)
  };

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // function auto() {
  //   slideInterval = setInterval(nextSlide, 5000)
  // }

  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, nextSlide]);

  // useEffect(() => {
  //   if (autoScroll) {
  //     auto()
  //   }
  //   return () => clearInterval(slideInterval)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])
  
  useEffect(() => {
    setCurrentSlide(0)
  },[])
  return (
    <div className="slider">
      <MdArrowBackIosNew className="arrows prev" onClick={prevSlide} />
      <MdArrowForwardIos className="arrows next" onClick={nextSlide}/>

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
          key={index}>
            {index === currentSlide && (
              <>
              <img src={slide.image} alt="img"/>
              <div className="content">
                <h2>{slide.header}</h2>
                <p>{slide.desc}</p>
                <button className="shop-btn"><Link to="#">shop Now<MdArrowForwardIos/></Link></button>
              </div>
              </>
            )}
          </div>
        );
      })}
      
    </div>
  );
}

export default Slider;
