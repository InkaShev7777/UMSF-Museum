import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const VisitorView = () => {
  return (
    <div>
        <Header/>

        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h1>ВІДВІДУВАЧУ</h1>
          <div style={{padding: 150}}>
            <h3>СПЛАНУЙТЕ СВІЙ ВІЗИТ</h3>
            <p>Чекаємо Вас: вівторок-п’ятниця</p>
            <p>з 10:00 по 15:00</p>
            <p><strong>Записатись на екскурсію:</strong></p>
            <p>(056) 756-05-00</p>
            <p>(066) 510-01-35</p>
          </div>
        </div>

        <Footer/>
    </div>
  )
}