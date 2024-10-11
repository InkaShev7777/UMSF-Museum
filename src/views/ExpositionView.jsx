import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/Exposition.css";

export const ExpositionView = () => {
  const navigate = useNavigate();

  const handleMoreExposition = (idExposition) => {
    navigate(`/expositons/${idExposition}`);
  };

  const [selectedId, setSelectedId] = useState(-1);
  const expositions = [
    { id: 0, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/5.jpg", desc: "Експозиція сучасних і колишніх технічних засобів митного контролю в Україні – балконна зала" },
    { id: 1, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/2.jpg", desc: "Історія митної справи, митних органів, фінансів та торгівлі на території України з найдавніших часів – перша зала музею" },
    { id: 2, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/3.jpg", desc: '"Боротьба з контрабандою в Україні" представлена у другій залі музею' },
    { id: 3, src: "http://umsf.dp.ua/images/Ekspozytsiyi/4/golovna_4.jpg", desc: "Третя зала музею Університету присвячена історії митних органів незалежної України" },
    { id: 4, src: "http://umsf.dp.ua/images/Ekspozytsiyi/1/main.jpg", desc: "Унікальна експозиція уніформ митників країн світу – другий та третій поверхи Університету" },
    { id: 5, src: "http://umsf.dp.ua/images/Ekspozytsiyi/9/4_zal.jpg", desc: "Четверта зала музею Університету присвячена історії створення й розвитку Університету митної справи та фінансів" },
    { id: 6, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/6.jpg", desc: "На четвертому поверсі – експозиція «Банкноти світу», де представлені аверси і реверси різних номіналів банкнот країн світу" },
    { id: 7, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/8.jpg", desc: "Експозиція «Історія країн у монетах» представляє монетообіг теперішніх і колишніх держав з усіх континентів" },
    { id: 8, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/7_2.jpg", desc: "Експозиція «Україна. Валюта» розкриває історичні етапи й розвиток грошового обігу на території України з найдавніших часів і до сучасності" },
    { id: 9, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/Petr_main.jpg", desc: "Експозиція «Петриківський розпис» представлена у холі на першому поверсі"},
    { id: 10, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/galery.jpg", desc: "Експозиція «Галерея мистецтва» представлена на третьому поверсі (лабораторний корпус)"},
    { id: 11, src: "http://umsf.dp.ua/images/Ekspozytsiyi/Tertushnik/foto1.jpg", desc: "Виставка фотохудожника пейзажиста Володимира Тертишника (навч. корпус №3)"},
    { id: 12, src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/foto_2.jpg", desc: "Експозиція «Випускники» представлена на другому поверсі"},
    { id: 13, src: "http://umsf.dp.ua/images/Ekspozytsiyi/NaukoviZdobutku/_DSC_0345.jpg", desc: "Експозиція «Наукові здобутки» представлена на третьому поверсі"},
    { id: 14, src: "http://umsf.dp.ua/images/Ekspozytsiyi/12/0291.jpg", desc: "Експозиція «Портрети особистостей Університету»"},
    { id: 15, src: "http://umsf.dp.ua/images/Ekspozytsiyi/13/0281.jpg", desc: "Експозиція «Іноземці-випускники Університету»"},
    { id: 16, src: "http://umsf.dp.ua/images/Ekspozytsiyi/14/main.jpg", desc: "Персональні виставки Члена Національної Спілки Художників України Ігоря Зайцева"},
    { id: 17, src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/DSC_0314.jpg", desc: "Перманентна художня виставка робіт Членів Національної Спілки Художників України"},
    { id: 18, src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/DSC_0336.jpg", desc: "Перманентна виставка фотомайстрів"},
    { id: 19, src: "http://umsf.dp.ua/images/Ekspozytsiyi/17/DSC_0296.jpg", desc: "Фотогалерея відомих гостей Університету"},
    { id: 20, src: "http://umsf.dp.ua/images/Ekspozytsiyi/18/DSC_0433.jpg", desc: "Художня галерея АМСУ"},
    { id: 21, src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/main.jpg", desc: "Перманентна виставка в центральному холі УМСФ"},
  ];

  const openMoreInfoWindow = (idCard) => {
    if(idCard >= 0) {
      console.log("ID Now: " + idCard);
      
    }
  }

  return (
    <div>
      <Header />
      <h1 className="exposition-title">
        Експозиції Університету митної справи та фінансів
      </h1>

      <div className="exposition-container">
        <div className="expositions-container">
          
          {expositions.map((item) => (
            <div className="exposition-cards">
              <div className="exposition-card" onClick={() => { handleMoreExposition(item.id) }}>
                <div className="exposition-card-pic">
                  <img className="exposition-img" src={item.src} alt="" />
                </div>
                <div className="container-description">
                  <p className="explorer-description">{item.desc}</p>
                </div>
              </div>

              {item.id >= 3 && item.id <= 5 ? <hr/>: <div/>}

              {item.id >= 6 && item.id <= 8 ? <hr/>: <div/>}

            </div>
          ))}

        </div>
      </div>

      <Footer />
      
    </div>
  );
};
