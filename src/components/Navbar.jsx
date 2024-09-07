import React from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const {t ,i18n} = useTranslation("global")
    
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language)
    }
    
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <li>{t('logoName')}</li>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <button onClick={() => changeLanguage("uz")}>O'zbek tili</button>
        <button onClick={() => changeLanguage("ru")}>Rus tili</button>
        <button onClick={() => changeLanguage("en")}>Engliz tili</button>
      </ul>
    </nav>
  );
}

export default Navbar;
