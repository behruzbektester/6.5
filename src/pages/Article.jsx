import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Article() {
  return (
    <>
      <Header />
      <section className="article-section">
        <div className="article__side-container container">
          <div className="article__left">
            <div className="article__source-container">
              <img src="/solenka-big.svg" alt="" />
              <span className="article__source-name">FBM.ru 22:23</span>
            </div>
            <h2 className="article__left__heading">
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </h2>
            <div className="article__left__text-container">
              <img
                className="article__img"
                src="/tesla-article-img.png"
                alt=""
              />
              <p className="article__left__text">
                Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                проектов) уже второй раз за полторы недели обратился к китайским
                правящим кругам и гражданам. В видеоролике он уверил их в своей
                готовности инвестировать средства в развитие и расширять бизнес
                на территории этой страны. Особое внимание будет уделяться
                небезопасности обрабатываемых данных.
              </p>
              <p className="article__left__text">
                Они будут храниться только в самом Китае и поэтому будут
                доступны правительству Поднебесной в любой момент.
              </p>
              <p className="article__left__text">
                Новые заявления Илон Маск сделал во время видеообращения к
                аудитории мероприятия World Internet Conference, которое прошло
                в конце недели в Поднебесной. Компанию ему составили
                руководители Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер)
                и Qualcomm (Кристиано Амон), а интересы бизнеса Китайской
                Народной Республики представляли руководители Alibaba и Xiaomi.
              </p>
              <p className="article__left__text">
                Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
                который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
                Поднебесной работать со всеми державами над созданием прозрачной
                цифровой экономики.
              </p>
              <p className="article__left__text">
                В ближайшее время Tesla собирается не только сделать шире объёмы
                производства автомобилей на электрической тяге в шанхайском
                филиале, но и разработать силами местной студии недорогую модель
                электрического автомобиля (стоимостью менее 25 000 долларов).
              </p>
              <p className="article__left__text">
                Уже в настоящий момент собранные в Китайской Народной Республике
                электрокары Tesla Model Y и Model 3 поставляются на экспорт в
                Европу.
              </p>
            </div>
          </div>

          <div className="article-section__right">
            <div className="article-section__right-top">
              <div className="article__news-container">
                <h3 className="article__right__box-heading">Главное</h3>
                <Link to={"/"} className="link-to">
                  <div className="article__news">
                    <h4 className="article__news__heading">
                      В Фергане создадут узбекско-пакистанский университет
                    </h4>
                    <p className="article__news__source">
                      Sputnik Узбекистан 14:09
                    </p>
                  </div>
                </Link>
                <Link to={"/"} className="link-to">
                  <div className="article__news">
                    <h4 className="article__news__heading">
                      Узбекистан утвердил соглашение о содействии занятости в
                      странах СНГ
                    </h4>
                    <p className="article__news__source">
                      ИА Красная Весна 10:19
                    </p>
                  </div>
                </Link>
                <Link to={"/"} className="link-to">
                  <div className="article__news">
                    <h4 className="article__news__heading">
                      В Узбекистане увеличиваются очереди за автомобилями UzAuto
                    </h4>
                    <p className="article__news__source">
                      Северная газета (Армянск) 13:50
                    </p>
                  </div>
                </Link>
                <Link to={"/"} className="link-to">
                  <div className="article__news">
                    <h4 className="article__news__heading">
                      Минтуризма опровергло приостановку выплат за шаги
                    </h4>
                    <p className="article__news__source">
                      Sputnik Узбекистан 14:32
                    </p>
                  </div>
                </Link>
                <Link to={"/"} className="link-to">
                  <div className="article__news">
                    <h4 className="article__news__heading">
                      В Самаркандской области произошел пожар в торговом центре
                    </h4>
                    <p className="article__news__source">UPL24 23:52</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="article-section__right-bottom">
              <img src="/building-ad.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="to-home container">
        <h2 className="to-home__heading">По вашим интересам</h2>
        <div className="to-home__boxes-container">
          <Link to={"/"} className="to-home__boxes-linker">
            <div className="to-home__boxes-container__boxes">
              <h3 className="to-home__boxes__heading">
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p className="to-home__boxes__text">
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <div className="to-home__boxes__source-container">
                <img src="/diggeer.svg" alt="" />
                <span className="to-home__source">Digger.ru 14:25</span>
              </div>
            </div>
          </Link>
          <Link to={"/"} className="to-home__boxes-linker">
            <div className="to-home__boxes-container__boxes">
              <h3 className="to-home__boxes__heading">
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p className="to-home__boxes__text">
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <div className="to-home__boxes__source-container">
                <img src="/lenta.svg" alt="" />
                <span className="to-home__source">Lenta.ru 10:54</span>
              </div>
            </div>
          </Link>
          <Link to={"/"} className="to-home__boxes-linker">
            <div className="to-home__boxes-container__boxes">
              <h3 className="to-home__boxes__heading third-box-heading">
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h3>
              <p className="to-home__boxes__text">
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <div className="to-home__boxes__source-container">
                <img src="/tarantas.svg" alt="" />
                <span className="to-home__source">Тарантас Ньюс 10:44</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
