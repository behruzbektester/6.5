import React from "react";

export default function Sections() {
  const addHidden = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      addHidden();
    }
  });
  return (
    <main className="main">
      <section className="hero-section container">
        <div className="hero__red-add">
          <img src="/red-add.png" alt="add" />
        </div>
      </section>
      <section className="quick-news-section">
        <div className="quick-news-section__boxes-container container">
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
                соглашения
              </h3>
              <p className="boxes__text">
                Лидер Социал-демократической партии Германии (СДПГ) и кандидат
                на должность...
              </p>
            </div>
            <img src="/germany.png" alt="" />
            <div className="source">
              <img src="/kb.svg" alt="" />
              <span className="sites-name">ИА Красная Весна 15:55</span>
            </div>
          </div>
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Ученые доказали экспериментальным путем пользу покровных культур
              </h3>
              <p className="boxes__text">
                Новое исследование ученых университета Иллинойса объединяет
                полевые данные...
              </p>
            </div>
            <img src="/wheat.png" alt="" />
            <div className="source">
              <img src="/gazeta.svg" alt="" />
              <span className="sites-name">Газета.Ru 12:54</span>
            </div>
          </div>
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Baidu запустила публичный сервис роботакси Apollo Go в Шанхае
              </h3>
              <p className="boxes__text">
                Автопарк Baidu состоит из модифицированных электромобилей EV...
              </p>
            </div>
            <img src="/baidu.png" alt="" />
            <div className="source">
              <img src="/haitek.svg" alt="" />
              <span className="sites-name">Хайтек+ 13:44</span>
            </div>
          </div>
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p className="boxes__text">
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
            </div>
            <img src="/phone.png" alt="" />
            <div className="source">
              <img src="/diggeer.svg" alt="" />
              <span className="sites-name">Digger.ru 14:25</span>
            </div>
          </div>
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p className="boxes__text">
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
            </div>
            <img src="/covid.png" alt="" />
            <div className="source">
              <img src="/lenta.svg" alt="" />
              <span className="sites-name">Lenta.ru 10:54</span>
            </div>
          </div>
          <div className="boxes-container__boxes">
            <div className="text-container">
              <h3 className="boxes__heading">
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </h3>
              <p className="boxes__text">
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
            </div>
            <img src="/kia.png" alt="" />
            <div className="source">
              <img src="/tarantas.svg" alt="" />
              <span className="sites-name">Тарантас Ньюс 10:44</span>
            </div>
          </div>
        </div>
      </section>
      <section className="modal-section container">
        <div className="modal-section__text">
          <h3 className="modal-section__heading">
            Хотите быть в курсе свежих новостей? Включите уведомления!
          </h3>
          <button
            onClick={() => {
              modal.classList.remove("hidden");
              overlay.classList.remove("hidden");
            }}
            className="modal-btn show-btn"
          >
            Включить
          </button>
          <div className="modal hidden" id="modal">
            <div className="modal-header">
              <button
                onClick={() => {
                  addHidden();
                }}
                className="btn close-btn"
                id="close-btn"
              >
                <i className="fas fa-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="modal-title">
                Хотите быть в курсе свежих новостей? Включите уведомления!
              </h2>

              <div className="modal-close-btn-container">
                <button
                  onClick={() => {
                    addHidden();
                  }}
                  className="modal-close-btn"
                >
                  Включить
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              addHidden();
            }}
            className="overlay hidden"
            id="overlay"
          ></div>
        </div>
      </section>
      <section className="world-section">
        <div className="world-section__sides-container container">
          <div className="world-section__left">
            <div className="world-section__box">
              <img src="/plane.png" alt="" />
              <div className="boxes__content-container">
                <h3 className="world-section__boxes__heading">
                  Китайский Чунцин запустил чартерный рейс для студентов до
                  Британии
                </h3>
                <p className="world-section__boxes__text">
                  Чартерный рейс с 244 китайскими студентами вылетел из города
                  центрального подчинения Чунцина на юго-западе Китая в
                  британский Манчестер...
                </p>
                <div className="world-section__boxes__source">
                  <img src="/kb.svg" alt="" />
                  <span>ИА Красная Весна 12:25</span>
                </div>
              </div>
            </div>
            <div className="world-section__box">
              <img src="/germany-woman.png" alt="" />
              <div className="boxes__content-container">
                <h3 className="world-section__boxes__heading">
                  В Германии выпустят ограниченную партию плюшевых мишек в
                  образе Меркель
                </h3>
                <p className="world-section__boxes__text">
                  БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                  производству плюшевых игрушек в городе Кобург (федеральная
                  земля Бавария) изготовила уникального...
                </p>
                <div className="world-section__boxes__source">
                  <img src="/tass.svg" alt="" />
                  <span>ТАСС 11:35</span>
                </div>
              </div>
            </div>
            <div className="world-section__box">
              <img src="/china.png" alt="" />
              <div className="boxes__content-container">
                <h3 className="world-section__boxes__heading">
                  Акции КНР утратили доверие инвесторов. Что делать с бумагами
                  прямо сейчас
                </h3>
                <p className="world-section__boxes__text">
                  За последние месяцы инвесторы в китайский рынок пережили
                  настоящее потрясение — из-за ужесточения регулирования
                  технологического сектора и критики некоторых...
                </p>
                <div className="world-section__boxes__source">
                  <img src="/rbk.svg" alt="" />
                  <span>РБК Инвестиции 09:35</span>
                </div>
              </div>
            </div>
            <div className="world-section__box">
              <img src="/china-flag.png" alt="" />
              <div className="boxes__content-container">
                <h3 className="world-section__boxes__heading">
                  Китай раскритиковал заключенный Австралией, США и
                  Великобританией антикитайский союз AUKUS
                </h3>
                <p className="world-section__boxes__text">
                  Не только Франция, которая лишилась многомиллиардного
                  контракта с Австралий, осталась недовольна созданием
                  трехстороннего оборонного альянса AUKUS, пишет Anna-News.info
                </p>
                <div className="world-section__boxes__source">
                  <img src="/solenka.svg" alt="" />
                  <span>Solenka.info 19:43</span>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="more-btn">Показать ещё </button>
            </div>
          </div>
          <div className="world-section__right">
            <div className="world-section__right-top">
              <div className="news-container">
                <h3 className="right__box-heading">Главное</h3>
                <div className="news">
                  <h4 className="news__heading">
                    В Фергане создадут узбекско-пакистанский университет
                  </h4>
                  <p className="news__source">Sputnik Узбекистан 14:09</p>
                </div>
                <div className="news">
                  <h4 className="news__heading">
                    Узбекистан утвердил соглашение о содействии занятости в
                    странах СНГ
                  </h4>
                  <p className="news__source">ИА Красная Весна 10:19</p>
                </div>
                <div className="news">
                  <h4 className="news__heading">
                    В Узбекистане увеличиваются очереди за автомобилями UzAuto
                  </h4>
                  <p className="news__source">
                    Северная газета (Армянск) 13:50
                  </p>
                </div>
                <div className="news">
                  <h4 className="news__heading">
                    Минтуризма опровергло приостановку выплат за шаги
                  </h4>
                  <p className="news__source">Sputnik Узбекистан 14:32</p>
                </div>
              </div>
            </div>
            <div className="world-section__right-bottom">
              <img src="/building-ad.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
