import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="wrapper">
                    <div className="footer__item">
                        <div className="footer__logo-container">
                            <Link className="category-link" to='/'>
                                <img className='footer-logo' src="../resources/img/logo.png" alt="" />
                            </Link>
                            <h3 className='footer__title'>МУЗЕЙ УНІВЕРСИТЕТУ МИТНОЇ СПРАВИ ТА ФІНАНСІВ</h3>
                        </div>
                        <nav className='footer__nav'>
                            <ul className='footer__menu'>
                                <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Наші контакти:
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">+38(056) 756-05-00</p>
                                </li>

                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">+38(066) 510-01-35</p>
                                </li>

                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">(Viber, Telegram)</p>
                                </li>
                            </ul>

                            <ul className='footer__menu'>
                                <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Адреса:
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">м.Дніпро</p>
                                </li>

                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">вул.Старочумацька</p>
                                </li>

                                <li className="footer__menu-item">
                                    <p className="footer__menu-link">(Байкальська), 7</p>
                                </li>
                            </ul>

                            <ul className='footer__menu-social'>
                                <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Соціальні мережі:
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <a href="https://m.facebook.com/dcptots" target='blank' className='footer__menu-link'>
                                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" className='footer__menu-icon' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /> <title>Facebook</title></svg>
                                    </a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="https://www.instagram.com/dcptots/" target='blank'>
                                        <svg fill='white' xmlns="http://www.w3.org/2000/svg" className='footer__menu-icon' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='footer__protected'>
                    <p className='footer__protected-title'>&#169; Сайт розроблен Університетом митної справи та фінансів 2024</p>
                </div>
            </div>
        </>
    )
}