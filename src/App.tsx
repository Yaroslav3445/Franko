import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <div className="header__name"></div>
        <div className="header__text">
          <ul className='header_ul'>
            <li><a href="">Новини</a></li>
            <li><a href="">Про нас</a></li>
            <li><a href="">Розклад</a></li>
            <li><a href="">Команда</a></li>
            <li><a href="">Подкасти</a></li>
            <li><a href="">Контаки</a></li>
          </ul>
          <button type='button' className='header__button'>Підтримати</button>
        </div>
      </div>
      <div className="audio">
        <div className="audio__block">
          <div className="audio__bord">
            <div className="audio__image"></div>
          </div>
        </div>
        <div className="audio__text">
          <h1 className="audio__name">Назва подкасту</h1>
          <p className="audio__music">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="spiral-img"></div>
    </>
  );
}

export default App;
