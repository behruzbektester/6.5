import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top ">
        <div className="footer__top__left__container container">
          <div className="footer__top__left">
            <Link className="footer__logo">NAMANGANLIKLAR 24</Link>
            <p className="footer__text">
              Воспроизводство, копирование, использование информации с сайта
              «NAMANGANLIKLAR24.UZ» возможно только с предварительного
              письменного разрешения редакции.
            </p>
          </div>
        </div>
        <div className="footer__top__right container">
          <ul className="footer__list">
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Информация о сайте
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Использование материалов
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Напишите нам
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Темы дня
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Реклама
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Наша команда
              </Link>
            </li>
            <li className="footer__list__item">
              <Link className="footer__links" to={"/"}>
                Прислать новость
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="container" />
      <div className="footer__bottom container">
        <div className="footer__bottom__left">
          <h3 className="footer__heading">Наши социальные сети</h3>
        </div>
        <div className="footer__bottom__right">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_324)">
              <path
                d="M23.62 4.41806e-08H1.37882C0.617218 0.000381514 -0.000190691 0.618172 4.41806e-08 1.37997V23.6212C0.000381514 24.3828 0.618172 25.0002 1.37997 25H23.62C24.382 25.0002 24.9998 24.3826 25 23.6206C25 23.6204 25 23.6202 25 23.62V1.37882C24.9996 0.617218 24.3818 -0.000190691 23.62 4.41806e-08Z"
                fill="#4267B2"
              />
              <path
                d="M17.2607 25V15.3321H20.52L21.0083 11.5479H17.2607V9.13776C17.2607 8.04466 17.5642 7.29984 19.1317 7.29984H21.1182V3.92441C20.7726 3.87844 19.5868 3.77563 18.207 3.77563C15.3261 3.77563 13.3545 5.53345 13.3545 8.76297V11.5479H10.1074V15.3321H13.3545V25H17.2607Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_324">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_320)">
              <path
                d="M1.56244 1.70122C-0.40214 3.74185 -5.69224e-05 5.90956 -5.69224e-05 12.495C-5.69224e-05 17.9637 -0.954224 23.446 4.03953 24.7366C5.5989 25.1377 19.4156 25.1377 20.9729 24.7346C23.052 24.1981 24.7437 22.5116 24.9749 19.571C25.0072 19.1606 25.0072 5.83664 24.9739 5.41789C24.7281 2.2856 22.7999 0.480389 20.2593 0.114764C19.677 0.0303889 19.5604 0.00538891 16.5729 0.000180572C5.97598 0.00538891 3.65307 -0.466486 1.56244 1.70122Z"
                fill="url(#paint0_linear_1_320)"
              />
              <path
                d="M12.4979 3.26965C8.71563 3.26965 5.12397 2.93319 3.75209 6.45403C3.18543 7.90819 3.26772 9.79674 3.26772 12.5009C3.26772 14.8738 3.19168 17.104 3.75209 18.5467C5.12084 22.0697 8.74167 21.7322 12.4958 21.7322C16.1177 21.7322 19.8521 22.1092 21.2406 18.5467C21.8083 17.078 21.725 15.2176 21.725 12.5009C21.725 8.89465 21.924 6.56653 20.175 4.81861C18.4042 3.04778 16.0094 3.26965 12.4938 3.26965H12.4979ZM11.6708 4.93319C19.5604 4.92069 20.5646 4.04361 20.0104 16.228C19.8135 20.5374 16.5323 20.0644 12.499 20.0644C5.1448 20.0644 4.93334 19.854 4.93334 12.4967C4.93334 5.05403 5.51668 4.93736 11.6708 4.93111V4.93319ZM17.425 6.46548C16.8135 6.46548 16.3177 6.96132 16.3177 7.57278C16.3177 8.18424 16.8135 8.68007 17.425 8.68007C18.0365 8.68007 18.5323 8.18424 18.5323 7.57278C18.5323 6.96132 18.0365 6.46548 17.425 6.46548ZM12.4979 7.76028C9.88022 7.76028 7.75834 9.88319 7.75834 12.5009C7.75834 15.1186 9.88022 17.2405 12.4979 17.2405C15.1156 17.2405 17.2365 15.1186 17.2365 12.5009C17.2365 9.88319 15.1156 7.76028 12.4979 7.76028ZM12.4979 9.42382C16.5656 9.42382 16.5708 15.578 12.4979 15.578C8.43126 15.578 8.42501 9.42382 12.4979 9.42382Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_320"
                x1="1.61038"
                y1="23.4034"
                x2="24.8452"
                y2="3.29391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFDD55" />
                <stop offset="0.5" stopColor="#FF543E" />
                <stop offset="1" stopColor="#C837AB" />
              </linearGradient>
              <clipPath id="clip0_1_320">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_316)">
              <path
                d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                fill="#039BE5"
              />
              <path
                d="M5.7197 12.2291L17.7718 7.58226C18.3312 7.38018 18.8197 7.71872 18.6384 8.56456L18.6395 8.56351L16.5874 18.2312C16.4353 18.9166 16.028 19.0833 15.4582 18.7604L12.3332 16.4573L10.8259 17.9093C10.6593 18.076 10.5187 18.2166 10.1957 18.2166L10.4176 15.0364L16.2093 9.80414C16.4614 9.58226 16.153 9.45726 15.8207 9.6781L8.66345 14.1843L5.57803 13.2218C4.90824 13.0093 4.89366 12.5521 5.7197 12.2291Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_316">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.4849 6.49871C24.1967 5.42773 23.3523 4.58355 22.2815 4.29516C20.3252 3.75977 12.4998 3.75977 12.4998 3.75977C12.4998 3.75977 4.67451 3.75977 2.71815 4.27475C1.66797 4.56295 0.80299 5.42793 0.514791 6.49871C0 8.45487 0 12.5118 0 12.5118C0 12.5118 0 16.5891 0.514791 18.5249C0.803181 19.5956 1.64737 20.44 2.71834 20.7284C4.69511 21.2638 12.4999 21.2638 12.4999 21.2638C12.4999 21.2638 20.3252 21.2638 22.2815 20.7488C23.3525 20.4606 24.1967 19.6162 24.4851 18.5455C24.9999 16.5891 24.9999 12.5324 24.9999 12.5324C24.9999 12.5324 25.0205 8.45487 24.4849 6.49871Z"
              fill="#FF0000"
            />
            <path
              d="M10.0038 16.2605L16.5111 12.5126L10.0038 8.76465V16.2605Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
