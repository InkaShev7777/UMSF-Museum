import React, { useState } from 'react'
import { Header } from '../components/Header'
import '../styles/HomeView.css'
import { Footer } from '../components/Footer'
import HomeCarusele from '../components/HomeCarusele'

export const HomeView = () => {
  const news = [
    {
      id: 0,
      imageUrl: "/resources/img/news/news-1.jpeg",
      title: "СТАРІ БАНКНОТИ – НОВІ ІСТОРІЇ"
    },
    {
      id: 1,
      imageUrl: "/resources/img/news/news-2.jpeg",
      title: "Рік Дракона"
    },
    {
      id: 2,
      imageUrl: "/resources/img/news/news-3.jpg",
      title: "Команда «Back to life»"
    },
    {
      id: 3,
      imageUrl: "/resources/img/news/news-4.jpg",
      title: "Назва новини*"
    }

  ];


  return (
    <div>
      <Header/>
        <div className='home-container'>
          <h1>Головна</h1>
          <div className='about-container'>
            <p>
              Ласкаво просимо до <strong>Музею Університету митної справи та фінансів!</strong> Наш музей — це унікальне місце, 
              де зібрані багаті історичні та культурні надбання митної служби та фінансової системи України. 
              Експозиції музею розкривають важливі етапи розвитку митної справи, економіки та фінансових 
              інститутів, а також знайомлять з науковими досягненнями університету.
            </p>

            <p>
              Завітайте до нас, щоб дізнатися більше про історію митної справи, ознайомитися з рідкісними експонатами, 
              архівними матеріалами та унікальними документами, що демонструють розвиток професії та суспільства.
            </p>
          </div>

          <h1>Новини</h1>
          <div className='news'>
          {news.map((item) => (
            <div className='news-card'>
              <img className='news-image' src={item.imageUrl} alt="" />
              <div className='news-info'>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
          </div>

          <HomeCarusele/>
        </div>
      <Footer/>
    </div>
  )
}