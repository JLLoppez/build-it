import React from "react";

const Footer = React.forwardRef ((props, ref) => {
    const year = new Date().getFullYear();
  
    return (
        <>
            <footer className="footer">
      <div className="footer__row-1">
        <div className="footer__box">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/#"  className="footer__link">About Us</a>
            </li>
            <li className="footer__item">
              <a href="/#services"  className="footer__link">Services</a>
            </li>
            <li className="#footer__item">
              <a href="/#" className="footer__link">Projects</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">Gallery</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Support</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/#"  className="footer__link">Get Help</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">FAQs</a>
            </li>
            <li className="#footer__item">
              <a href="/#" className="footer__link">Privacy Policy</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">Terms of Operation</a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Offices</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/#"  className="footer__link">Cape Town</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">Hermanus</a>
            </li>
            <li className="#footer__item">
              <a href="/#" className="footer__link">Bellville</a>
            </li>
            <li className="footer__item">
              <a href="/#"  className="footer__link">Durbanville</a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <label htmlFor="language" className="footer__title">Language</label>
          <select name="language" id="language" className="footer__dropdown">
            <option className="footer__dropdown-item">English</option>
            <option className="footer__dropdown-item">French</option>
            <option className="footer__dropdown-item">Spanish</option>
            <option className="footer__dropdown-item">Arabic</option>
          </select>
        </div>
      </div>

      <div className="footer__row-2 u-margin-top-small">
        <p className="copyright">&copy; 
            <span >{year}</span> - Developed with 💚 by <a className="dev" rel="noreferrer" href="https://github.com/JLLoppez" target="_blank">J Lopes</a>.
        </p>

        <div className="footer__social-icons-box">
          <a href="/#" className="footer__social-link">
            {/* <svg className="social-icon">
              <use xlink:href="img/sprite.svg#facebook"></use>
            </svg> */}
          </a>
          <a href="/#"  className="footer__social-link">
            {/* <svg className="social-icon">
              <use xlink:href="img/sprite.svg#instagram"></use>
            </svg> */}
          </a>
          <a href="/#"  className="footer__social-link">
            {/* <svg className="social-icon">
              <use xlink:href="img/sprite.svg#twitter"></use>
            </svg> */}
          </a>
        </div>
      </div>

      <div className="footer__row-3 u-margin-top-small">
        {/* <svg className="logo">
          <use xlink:href="img/sprite.svg#buildco-logo-white"></use>
        </svg> */}
        {/* <p className="developer-text">Made with 🤍 && 🔥 by d3vd3511gn</p> */}
      </div>
    </footer>
        </>
    );
});

export default Footer;