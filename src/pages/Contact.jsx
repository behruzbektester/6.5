import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="contact-section">
          <h2 className="contact__heading container">Напишите нам</h2>
          <div className="contact__sides-container container">
            <div className="contact__left">
              <form className="contact__left__inputs-container">
                <label className="contact__name-input">
                  <input className="name-phone" type="text" placeholder="Имя" />
                  <input
                    className="name-phone"
                    type="tel"
                    placeholder="Номер телефона"
                  />
                </label>
                <label>
                  <input
                    className="email-input"
                    type="email"
                    placeholder="Электронная почта"
                  />
                </label>
                <label>
                  <textarea name="" id="" placeholder="Текст"></textarea>
                </label>
              </form>
            </div>
            <div className="contact__right">
              <div className="contact__news-container">
                <div className="contact__news">
                  <h4 className="contact__news__heading">Электронная почта</h4>
                  <p className="contact__news__source">
                    <a href="mailto:info@namanganliklar24.uz">
                      info@namanganliklar24.uz
                    </a>
                  </p>
                </div>
                <div className="contact__news">
                  <h4 className="contact__news__heading">Номер телефона</h4>
                  <p className="contact__news__source">
                    <a href="tel:+998 88 522-54-76">+998 88 522-54-76</a>
                  </p>
                </div>
                <div className="contact__news">
                  <h4 className="contact__news__heading">Адрес</h4>
                  <p className="contact__news__source">
                    <address>Ташкент, площадь Мустакиллик, 6 </address>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="commit-btn-container">
            <button className="commit-btn">Отправить</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
