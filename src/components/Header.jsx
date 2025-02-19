import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-container container">
          <div className="header__left">
            <Link to="/" className="header__logo">
              NAMANGANLIKLAR 24
            </Link>
            <div className="header__left__price">
              <p className="prices">
                <span className="valute">$</span> 10137.2
              </p>
              <p className="prices">
                <span className="valute">P</span> 138.26
              </p>
            </div>
          </div>
          <div className="header__right">
            <div className="search-container">
              <img src="/search.svg" alt="Search Icon" width={20} />
              <input className="search-input" type="text" placeholder="Поиск" />
            </div>
            <div className="toggle">
              <input type="checkbox" id="langSwitch" />
              <label htmlFor="langSwitch" className="toggle-label"></label>
              <span>УЗ</span>
              <span>РУ</span>
            </div>
            <div className="login-button-container">
              <button className="login-button">Войти</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__bottom-container container">
          <ul className="header__list">
            <li className="header__list__item">
              <Link to={"/"} className="header__list__item__link">
                Главное
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/list"} className="header__list__item__link">
                Интересное
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/list"} className="header__list__item__link">
                Экономика
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/list"} className="header__list__item__link">
                Политика
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/contact"} className="header__list__item__link">
                Общество
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/technology"} className="header__list__item__link">
                Технологии
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/sport"} className="header__list__item__link">
                Спорт
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/culture"} className="header__list__item__link">
                Культура
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"accidents"} className="header__list__item__link">
                Происшествия
              </Link>
            </li>
            <li className="header__list__item">
              <Link to={"/science"} className="header__list__item__link">
                Наука
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
