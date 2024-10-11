import '../styles/Header.css'

import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
  

  return (
    <header>
      <div className='main_div'>
        <Link className="category-link" to='/'>
          <img className='main_logo' src="../resources/img/logo.png" alt="logo" />
        </Link>
        <h1 className='title'>Музей Університету митної справи та фінансів</h1>
        <nav>
        <ul className='categories'>
          <li className='category'>
            <Link className="category-link" to='/'>Гoловна</Link>
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
              <Link className="category-link" to='/gallery'>Гaлерея</Link>
            </li>
            <li className='category'>
              <Link className="category-link" to='/visitor'>Відвідувачу</Link>
            </li>
            <li className='category-link'>
              Контакти &#9662;
            <ul className='sub_categories'>
                <li className='sub_category'>
                  <p className="sub_category-link" >+38(056) 756-05-00</p>
                </li>
                <li className='sub_category'>
                  <p className="sub_category-link">+38(066) 510-01-35</p>
                </li>
              </ul>
            </li>
        </ul>
        </nav>
      </div>
    </header>
  )
}