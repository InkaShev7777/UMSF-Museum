import React from 'react'
import "../styles/HomeCarusele.css"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Gallery.css"

const HomeCarusele = () => {

    const images = [
        {src: "/resources/img/carusele/carusele-1.jpg"},
        {src: "/resources/img/carusele/carusele-2.jpg"},
        {src: "/resources/img/carusele/carusele-3.jpg"},
        {src: "/resources/img/carusele/carusele-4.jpg"},
        {src: "/resources/img/carusele/carusele-5.jpg"},
        {src: "/resources/img/carusele/carusele-6.jpg"}
    ]

  return (
    <div className='gallery-space'>
        <div className='home-carusele_container'>
            <Carousel className='home-carusele' autoPlay infiniteLoop showArrows={true} showStatus={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className='home-carusele_image' src={image.src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}

export default HomeCarusele
