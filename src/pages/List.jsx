import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <>
      <Header />
      <main className="list-main">
        <section className="list__ad-section">
          <img src="/blue-ad.png" alt="" />
        </section>
        <section className="interesting-section">
          <h2 className="interesting-section__heading container">Интересное</h2>
          <div className="list__sides-container container">
            <div className="interesting-section__left">
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/tashkent.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Отопление Ташкента на 30 лет переходит в управление
                      французской Veolia
                    </h3>
                    <p className="texts-container__text">
                      Система теплоснабжения Ташкента на 30 лет будет передана в
                      управление французской компании Veolia для модернизации и
                      реконструкции, сообщает 22 сентября пресс-служба...
                    </p>
                    <div className="list__source-container">
                      <img src="/kb.svg" alt="" />
                      <p className="list__source">ИА Красная Весна 15:26</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/apple.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Пользователи жалуются на новую проблему iPhone 13,
                      связанную с камерой
                    </h3>
                    <p className="texts-container__text">
                      Пользователи смартфона Apple iPhone 13 продолжают сообщать
                      о новых проблемах, с которыми они сталкиваются при
                      использовании флагмана, поступившего в продажу только
                      позавчера...
                    </p>
                    <div className="list__source-container">
                      <img src="/pepelac.svg" alt="" />
                      <p className="list__source">Пепелац Ньюс 07:35</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/xbox.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Halo Infinite сравнили на Xbox One, Xbox One X, Xbox
                      Series S и Xbox Series X
                    </h3>
                    <p className="texts-container__text">
                      Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                      консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series
                      X. Графика впечатляет на всех платформах. Также
                      отмечается...
                    </p>
                    <div className="list__source-container">
                      <img src="/dns.svg" alt="" />
                      <p className="list__source">Клуб DNS 15:33</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/cars.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      В Узбекистане показали тюнинговые варианты моделей
                      Lacetti, Cobalt, Nexia и Spark
                    </h3>
                    <p className="texts-container__text">
                      «В сети наши потребители обсуждали тему сильного
                      преобладания белого цвета в модельном ряду UzAuto Motors.
                      Почему вы не делаете двухцветные автомобили? Этот вопрос
                      был...
                    </p>
                    <div className="list__source-container">
                      <img src="/sputnik.svg" alt="" />
                      <p className="list__source">Sputnik Узбекистан 18:43</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/iphone.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Время автономной работы iPhone 13 Pro Max стало рекордным
                      для смартфонов Apple
                    </h3>
                    <p className="texts-container__text">
                      Линейка смартфонов iPhone 13 от Apple была презентована на
                      прошлой неделе. Прием предзаказов на устройство стартовал
                      22 сентября, а 24 сентября новинка появилась в магазинах.
                    </p>
                    <div className="list__source-container">
                      <img src="ireactor.svg" alt="" />
                      <p className="list__source">iReactor 12:25</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/huobi.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Криптобиржа Huobi закрыла регистрацию пользователей из
                      Китая
                    </h3>
                    <p className="texts-container__text">
                      Крупнейшая в Китае биржа для торговли биткоинами Huobi
                      приостановила регистрацию пользователей из КНР. Ранее
                      местный Центробанк назвал нелегальными все транзакции...
                    </p>
                    <div className="list__source-container">
                      <img src="/kompaniya.svg" alt="" />
                      <p className="list__source">Компания 11:35</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/kino-5days.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      В Узбекистане пройдет международный конкурс молодых
                      кинематографистов «Кино за 5 дней»
                    </h3>
                    <p className="texts-container__text">
                      В Узбекистане 22 сентября стартовал конкурс молодых
                      кинематографистов «Кино за пять дней». Мероприятие
                      проходит в рамках Ташкентского Международного...
                    </p>
                    <div className="list__source-container">
                      <img src="/fergana.svg" alt="" />
                      <p className="list__source">Фергана 15:44</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/article"} className="link-to-article">
                <div className="left__boxes">
                  <img src="/tesla.png" alt="" />
                  <div className="left__boxes__texts-container">
                    <h3 className="texts-container__heading">
                      Илон Маск принял участие во Всемирной сетевой конференции
                      в Китае
                    </h3>
                    <p className="texts-container__text">
                      Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                      проектов) уже второй раз за полторы недели обратился к
                      китайским правящим кругам и гражданам.
                    </p>
                    <div className="list__source-container">
                      <img src="solenka.svg" alt="" />
                      <p className="list__source">FBM.ru 22:23</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="button-container">
                <Link to={"/list"} className="button-link more-btn">
                  Показать ещё
                </Link>
              </div>
            </div>
            <div className="interesting-section__right">
              <div className="list-section__right-top">
                <div className="list__news-container">
                  <h3 className="list__right__box-heading">Главное</h3>
                  <div className="list__news">
                    <h4 className="list__news__heading">
                      В Фергане создадут узбекско-пакистанский университет
                    </h4>
                    <p className="list__news__source">
                      Sputnik Узбекистан 14:09
                    </p>
                  </div>
                  <div className="list__news">
                    <h4 className="list__news__heading">
                      Узбекистан утвердил соглашение о содействии занятости в
                      странах СНГ
                    </h4>
                    <p className="list__news__source">ИА Красная Весна 10:19</p>
                  </div>
                  <div className="list__news">
                    <h4 className="list__news__heading">
                      В Узбекистане увеличиваются очереди за автомобилями UzAuto
                    </h4>
                    <p className="list__news__source">
                      Северная газета (Армянск) 13:50
                    </p>
                  </div>
                  <div className="list__news">
                    <h4 className="list__news__heading">
                      Минтуризма опровергло приостановку выплат за шаги
                    </h4>
                    <p className="list__news__source">
                      Sputnik Узбекистан 14:32
                    </p>
                  </div>
                </div>
              </div>
              <div className="list-section__right-bottom">
                <img src="list-building-ad.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
