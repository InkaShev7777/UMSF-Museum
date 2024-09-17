import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const GalleryView = () => {
  return (
    <div>
        <Header/>
        <h1>Gallery with image of museum</h1>

        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
            <div>
                <img src='resources/img/gallery-1.jpeg'></img>
            </div>

            <div>
                <img src='resources/img/gallery-2.jpeg'></img>
            </div>

            <div>
                <img src='resources/img/gallery-4.jpeg'></img>
            </div>
        </Carousel>

        <Footer/>
    </div>
  )
}