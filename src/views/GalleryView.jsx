import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Gallery.css"

export const GalleryView = () => {

    var images = [
        {src: 'resources/img/gallery-1.jpeg'},
        {src: 'resources/img/gallery-2.jpeg'},
        {src: 'resources/img/gallery-4.jpeg'},
    ]
  return (
    <div>
        <Header/>
        <div className='title-container'>
            <h1 className='title-gallery'>Гoлерея</h1>
        </div>
        <div className='gallery-container'>
            <Carousel className='carusele' autoPlay infiniteLoop showArrows={true} showStatus={false}>
               {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={`Slide ${index + 1}`} />
                    </div>
               ))}
            </Carousel>
        </div>
    
        <Footer/>

    </div>
  )
}