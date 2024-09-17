import '../styles/Header.css'

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
  

  return (
    <header>
      <div className='main_div'>
        <img className='main_logo' src="resources/img/umsf-logo.png" alt="logo" />

        <h1 className='title'>Музей Університету митної справи та фінансів</h1>
        <nav>
        <ul className='categories'>
          <li className='category'>
            <Link className="category-link" to='/'>Головна</Link>
          </li>
            <li className='category-link'>
              Про музей &#9662;
              <ul className='sub_categories'>
                <li className='sub_category'>
                  <Link className="sub_category-link" to='/history'>Історія створення музею</Link>
                </li>
                <li className='sub_category'>
                  <Link className="sub_category-link" to='/exposition'>Наші експозиції</Link>
                </li>
              </ul>
            </li>
            <li className='category'>
              <Link className="category-link" to='/gallery'>Голерея</Link>
            </li>
            <li className='category'>
              <Link className="category-link" to='/visitor'>Відвідувачу</Link>
            </li>
            <li className='category-link'>Контакти</li>
        </ul>
        </nav>
      </div>
    </header>
  )
}