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
            <p>Чекаємо Вас: <strong>вівторок-п’ятниця</strong></p>
            <p>з <strong>10:00</strong> по <strong>15:00</strong></p>
            <p><strong>Записатись на екскурсію:</strong></p>
            <p>+38(056) 756-05-00</p>
            <p>+38(066) 510-01-35</p>
          </div>
        </div>

        <Footer/>
    </div>
  )
}