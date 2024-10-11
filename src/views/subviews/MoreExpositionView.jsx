import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Gallery.css"
import "../../styles/MoreExpositions.css"
import { Footer } from '../../components/Footer';

const MoreExpositionView = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [secondImages, setSecondImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [secondDescription, setSecondDescription] = useState();

  useEffect(() => {
    if(id == 0) {
      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/5/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/5/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/5/3.jpg"},
      ]
      
      const title = "Експозиція сучасних і колишніх технічних засобів митного контролю в Україні представляє навчальну базу для вивчення й візуалізації для студентів засобів та історії роботи митників в Україні";

      setTitle(title);
      setImages(images);

    } else if (id == 1) {
      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/2/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/2/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/2/3.jpg"},
      ]

      const title = "Історія митної справи, митних органів, фінансів та торгівлі на території України з найдавніших часів – перша зала музею";

      setTitle(title);
      setImages(images);
    } else if (id == 2) {
      const title = "Боротьба з контрабандою в Україні";

      const description = 
      <div className='desc-container'>
        <p className='desc-title'>Тут можна побачити конфісковані під час перевірок митників речі:</p>
        <ul>
          <li className='li-exposition'>холодну зброю різних часів і з різних країн</li>
          <li className='li-exposition'>стенди з прикладами спроб завозу на територію України цигарок, наркотичних засобів, речовини, які дозволяють їх виявити</li>
          <li className='li-exposition'>старовинні книги та ікони</li>
          <li className='li-exposition'>радянські військові нагороди, зразки військової зброї</li>
          <li className='li-exposition'>приклади спроб звичайних громадян вивозити дорогоцінні речі за межі України</li>
        </ul>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/3/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/3/2_zal.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/3/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/3/Zala_2.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 3) {
      const title = "Третя зала музею Університету присвячена історії митних органів незалежної України";

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/4/3.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/4/3_zal_2.jpg"},
      ];

      setTitle(title);
      setImages(images);

    } else if (id == 4) {
      const title = "Унікальна експозиція уніформ митників країн світу – другий та третій поверхи Університету";

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/1/3.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/1/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/1.jpg"},
      ];

      setTitle(title);
      setImages(images);
      
    } else if (id == 5) {
      const title = "Четверта зала музею Університету присвячена історії створення й розвитку Університету митної справи та фінансів";

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/9/4_zal.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/9/4_zal_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/9/4_zal_1_2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/9/4_zal_2.jpg"},
      ];

      setTitle(title);
      setImages(images);
      
    } else if (id == 6) {
      const title = "Експозиція «Банкноти світу», яка оформлена за допомогою одного з наших партнерів. Тут на кожному стенді представлені аверси і реверси банкнот більшості країн світу різних номіналів";

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/6/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/6/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/6/3.jpg"},
      ];

      setTitle(title);
      setImages(images);
      
    } else if (id == 7) {
      const title = "Експозиція «Історія країн у монетах» розповідає про усі країни усіх континентів і представляє монетообіг теперішніх і колишніх держав";

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/7/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/7/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/7/3.jpg"},
      ];

      setTitle(title);
      setImages(images);
      
    } else if (id == 8) {
      const title = "Експозиція «Україна. Валюта»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p style={{textAlign: "center"}}> <strong>Експозиція «Україна. Валюта»</strong> розкриває фінансові відносини на території України, їх історичні етапи й розвиток грошового обігу на території України з найдавніших часів і до сучасності. Тут представлені колекції паперових і металевих грошей, що були в обігу в епохи середньовіччя, нового і новітнього часу, гроші держав, до складу яких входили в різні часи землі України. Є в експозиції купюри періоду боротьби України за незалежність і додержавних утворень на її землях початку ХХ століття, періоду окупації наших земель у часи Другої світової війни та боротьби визвольних рухів проти цієї окупації. Широко представлена історія грошей і фінансової системи Радянського Союзу (з моменту утворення) та вже незалежної України з 1991 року до теперішнього часу.</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/8/1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/8/2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/8/3.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/8/moneta.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 9) {
      const title = "Експозиція «Петриківський розпис»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'>Представлені досягнення видатних майстрів петриківського розпису, шкіл петриківського розпису – творчості школи м. Петриківка та студентів Дніпропетровського фахового мистецько-художнього коледжу культури.</p>
        
        <p className='description-item'>Хол на 1 поверсі, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/Petr_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/11/Petr_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/11/Petr_4.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 10) {
      const title = "Експозиція «Галерея мистецтва»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Представлені творчі досягнення наших студентів та співробітників.</h3>

        <p className='description-item'>3 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/10/gm_5.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/10/photo_2024-04-09_12-20-42.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/10/photo_2024-04-09_12-21-50.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/10/photo_2024-04-09_12-22-02.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 11) {
      const title = "Виставка фотохудожника пейзажиста Володимира Тертишника";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'>В УМСФ відкрита виставка фотохудожника пейзажиста, поета та відомого вченого  правника Володимира Тертишника. 
          Роботи Володимира підтверджують його закоханість в  чарівну  і благодатну різну землю, в свій різний край. 
          Картини віддзеркалюють величну красоту нашої природи, яка чарує тихими просторами степу, неймовірно красивими 
          і мальовничими берегами річок, таємничими і величавими горами та полонинами, тінистими розлогими лісовими гаями 
          та  шикарними лугами. Особливою романтикою наповнені пейзажі з берегів річки Оріль та Ворскла, ранкових туманів 
          з берегів  річки  Псел, осінні ракурси річки Грунь, радують неперевершеною красою фото білих лілей, весняних 
          пролісків та волошкових полян. Фотороботи привертають увагу своєю реалістичною вишуканістю.</p>

          <p className='description-item'>0 поверх, навч. корпус № 3</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/Tertushnik/foto2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/Tertushnik/foto3.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/Tertushnik/foto4.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 12) {
      const title = "Експозиція «Випускники»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Представлені фотографії випускників ЗВО, які мають досягнення на міжнародному та національному рівнях.</h3>
        
        <p className='description-item'>2 поверх, навч. корпус № 1</p>

      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/foto_2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/foto_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/main/foto_3.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 13) {
      const title = "Експозиція «Наукові здобутки»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'>Експозиція <strong>«Наукові здобутки»</strong> присвячена висвітленню досягнень наукової та науково-технічної діяльності 
          насамперед вчених університету та створює уявлення про наукові здобутки професорсько-викладацького складу 
          УМСФ. Демонструє їхній інтелектуальний потенціал. Результати наукової діяльності відображені в численних 
          наукових виданнях: монографіях, підручниках, посібниках тощо, вони підтверджуються патентами та свідоцтвами.
        </p>

        <p className='description-item'>Виставки, які будуть представлені в експозиції, висвітлюватимуть здобутки окремих вчених, наукових шкіл та 
          наукових установ; можуть бути присвячені видатним подіям, історичним датам, святам, ювілеям тощо.
        </p>

        <p className='description-item'>Передбачено організацію та проведення презентацій наукових видань, зустрічі з авторами та авторськими 
            колективами, загальновизнаними представниками наукової спільноти.
        </p>

        <p className='description-item'>3 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/NaukoviZdobutku/_DSC_0341.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/NaukoviZdobutku/_DSC_0343.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/NaukoviZdobutku/_DSC_0344.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 14) {
      const title = "Експозиція «Портрети особистостей Університету»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Представлені портрети людей, які зробили внесок в розвиток нашого закладу.</h3>
        
        <h3 className='description-item'>Автор – проф. Щетинін А. І.</h3>

        <p className='description-item'>2 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/12/0284.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/12/0286.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/12/photo_2024-04-05_11-52-25.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 15) {
      const title = "Експозиція «Іноземці-випускники Університету»";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Представлені портрети студентів УМСФ – представників різних країн світу.</h3>
        
        <h3 className='description-item'>Автор – проф. Щетинін А. І.</h3>

        <p className='description-item'>2 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/13/0279.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/13/0280.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 16) {
      const title = "Персональні виставки Члена Національної Спілки Художників України Ігоря Зайцева";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Виставка «Рапсодія мого життя»</h3>

        <p className='description-item'>3 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/14/1_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/14/1_2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/14/1_4.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/14/13.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 17) {
      const title = "Перманентна художня виставка робіт Членів Національної Спілки Художників України";

      const firstDescription = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Виставка творів живопису члена НСХУ Валерії Гети "Та хто я є"</h3>

        <p className='description-item'>1 поверх, навч. корпус № 1</p>
      </div>

      const secondDescription = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Виставка творів живопису члена НСХУ Олега Гладких "І прийде весна!"</h3>

        <p className='description-item'>1 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/DSC_0323.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/DSC_0328.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/main.jpg"},
      ];

      const secondImages = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/photo_2024-04-09_12-14-49.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/photo_2024-04-09_12-15-05.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setSecondImages(secondImages);
      setDescription(firstDescription);
      setSecondDescription(secondDescription);
      
    } else if (id == 18) {
      const title = "Перманентна виставка фотомайстрів";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Фотовиставка доцента кафедри Тетяни Дронової</h3>

        <p className='description-item'>1 поверх, навч. корпус № 1</p>
      </div>

      const secondDescription = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Фотовиставка військового художника  Сергія Дівєєва "Миті війни"</h3>

        <p className='description-item'>1 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/DSC_0332.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/DSC_0334.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/DSC_0340.jpg"},
      ];

      const secondImages = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/photo_2024-04-09_13-08-38.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/16/photo_2024-04-09_13-08-37.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setSecondImages(secondImages);
      setDescription(description);
      setSecondDescription(secondDescription);
      
    } else if (id == 19) {
      const title = "Фотогалерея відомих гостей Університету";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'>В галереї представлені фотографії візитів Президентів України, послів, консулів: США, Бразилії, 
          Азербайджана, Південної Кореї, Турції, Лівії, Польщі, Ізраїлю та інших країн, представники міжнародних 
          організацій ВМО, ОБСЄ, EUBAM та інших, керівників установ та відомств України, зарубіжних країн.
        </p>

        <p className='description-item'>2 поверх, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/17/DSC_0294.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/17/DSC_0299.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/17/DSC_0295.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/17/DSC_0297.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 20) {
      const title = "Художня галерея АМСУ";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <h3 className='description-item'>Постійнодіюча виставка Членів Національної Спілки Художників України</h3>

        <p className='description-item'>3, 4, 5, 6 поверхи, навч. корпус № 3</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/18/DSC_0447.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/18/DSC_0449.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/18/DSC_0450.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/18/DSC_0453.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setDescription(description);
      
    } else if (id == 21) {
      const title = "Перманентна виставка в центральному холі УМСФ";

      const description = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'>З 24 лютого 2024 року в Університеті відкрито нову  виставку «Два роки війни за волю та гідність», яка складається з декілька експозицій:</p>

        <p className='description-item'><strong>«Герої не вмирають»</strong> – експозиція, що присвячена землякам, які  отримали звання «Герой України» та офіцерам-фронтовикам.</p>
      </div>

      const secondDescription = 
      <div className='desc-container' style={{marginLeft: "60px", marginRight: "60px"}}>
        <p className='description-item'> <strong>«Очі війни»</strong> – фотоекспозиція військового художника Сергія Дівєєва.</p>

        <p className='description-item'> <strong>«Сучасна військова техніка в мініатюрах»</strong> виконаних завідувачем кафедри історії та теорії держави і права, а нині бійця Національної Гвардії Костянтином Колесниковим.</p>

        <p className='description-item'> <strong>«Технологічний супротив та кібербезпека»</strong> – демонстрація засобів технологічного супротиву та кібербезпеки.</p>

        <p className='description-item'> <strong>«І прийде весна...»</strong> – виставка робіт художника-військового Олега Гладких. Хол на 1 поверсі, навч. корпус № 1</p>
      </div>

      const images = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_7.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_5.jpg"},
      ];

      const secondImages = [
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_1.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_11.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_12.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_3.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_2.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_4.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/19/foto_8.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/photo_2024-04-09_12-14-49.jpg"},
        {src: "http://umsf.dp.ua/images/Ekspozytsiyi/15/photo_2024-04-09_12-15-05.jpg"},
      ];

      setTitle(title);
      setImages(images);
      setSecondImages(secondImages);
      setDescription(description);
      setSecondDescription(secondDescription);
    }
  }, [])

  return (
    <div>
        <Header/>
        <div className='info-container'>
          <div className='container-title'>
            <h1 className='exposition-title'>{title}</h1>
          </div>

          {description}
        </div>

        <div className='main-container'>
          <div style={{height: '60%', width: '60%'}} className='gallery-container'>
              <Carousel className='carusele' autoPlay infiniteLoop showArrows={true} showStatus={false}>
                {images.map((image, index) => (
                      <div key={index}>
                          <img src={image.src} alt={`Slide ${index + 1}`} />
                      </div>
                ))}
              </Carousel>
          </div>
        </div>

        <div className='info-container'>
          {secondDescription}
        </div>
        
        <div className='main-container'>
          <div style={{height: '60%', width: '60%'}} className='gallery-container'>
              <Carousel className='carusele' autoPlay infiniteLoop showArrows={true} showStatus={false}>
                {secondImages.map((image, index) => (
                      <div key={index}>
                          <img src={image.src} alt={`Slide ${index + 1}`} />
                      </div>
                ))}
              </Carousel>
          </div>
        </div>


        <Footer/>

    </div>
  )
}

export default MoreExpositionView
