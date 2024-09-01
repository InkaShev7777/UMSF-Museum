import React from 'react'
import { Header } from '../components/Header'
import '../styles/HomeView.css'
import { Footer } from '../components/Footer'

export const HomeView = () => {
  return (
    <div className='main-div'>
      <Header/>
        <div className='all-posters'>
          <h1>Posters DIV</h1>
        </div>
        <div className='all-news'>
          <h1>News DIV</h1>
        </div>
        <div className='all-posters'>
          <h1>Posters DIV</h1>
        </div>
        <div className='all-news'>
          <h1>News DIV</h1>
        </div>
        <div className='all-posters'>
          <h1>Posters DIV</h1>
        </div>
        <div className='all-news'>
          <h1>News DIV</h1>
        </div>
        <div className='all-posters'>
          <h1>Posters DIV</h1>
        </div>
        <div className='all-news'>
          <h1>News DIV</h1>
        </div>
        <div className='all-posters'>
          <h1>Posters DIV</h1>
        </div>
        <div className='all-news'>
          <h1>News DIV</h1>
        </div>

        <Footer/>
    </div>
  )
}
