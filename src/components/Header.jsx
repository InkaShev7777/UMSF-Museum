import '../styles/Header.css'

import React, { useState, useEffect, useRef } from 'react';

export const Header = () => {
  

  return (
    <header>
      <div className='main_div'>
        <img className='main_logo' src="resources/img/umsf-logo.png" alt="logo" />

        <h1 className='title'>Музей Університету митної справи та фінансів</h1>
      <ul className='categories'>
            <li className='category'>Головна</li>
            <li className='category'>
              Про музей &#9662;
              <ul className='sub_categories'>
                <li className='sub_category'>Історія створення музею</li>
                <li className='sub_category'>Наші експозиції</li>
              </ul>
            </li>
            <li className='category'>Голерея</li>
            <li className='category'>Відвідувачу</li>
            <li className='category'>Контакти</li>
        </ul>
      </div>
    </header>
  )
}
