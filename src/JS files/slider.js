import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../CSS files/slider.css'

const Slider = ({slides}) => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.image}>
        <div className="slide-container">
          <img
            className='d-block w-100'
            src={slide.image}
            alt='First Slide'
            height={'500px'}

          />
          <div className="image-overlay"></div>
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>
             {slide.subcontent}
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
