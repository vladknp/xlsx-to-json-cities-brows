import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
/*   constructor(props) {
    super(props);

  } */

  render() {
    return (

      <div className="k-container">
        <nav className="main">
          <a href=""><span className="icon-logo main__logo"></span></a>
          <ul className="main__list">
            <li className="main__list__item"><a className="main__list__link" href=""><span>Тарифы</span></a></li>
            <li className="main__list__item"><a className="main__list__link" href=""><span>Послуги</span></a></li>
            <li className="main__list__item"><a className="main__list__link" href=""><span>Мобільний інтернет</span></a></li>
            <li className="main__list__item"><a className="main__list__link" href=""><span>Міжнародний звязок</span></a></li>
            <li className="main__list__item"><a className="main__list__link" href=""><span>3G</span></a></li>
            <li className="main__list__item main__button-dropdown"><a className="main__list__link" href="/test" type="More"><span className="icon-more main__icon-more"></span></a>
              <ul className="main__dropdown">
                {/*<!--.main__dropdown_open-->*/}
                <li className="main__list__item"><a className="main__list__link" href=""><span>Роумінг</span></a></li>
                <li className="main__list__item"><a className="main__list__link" href=""><span>Додатки</span></a></li>
                <li className="main__list__item"><a className="main__list__link" href=""><span>Поповнення рахунків</span></a></li>
                <li className="main__list__item"><a className="main__list__link" href=""><span>Обслуговування та магазини</span></a></li>
              </ul>
            </li>
          </ul>
          <form className="main__search" action="?/search/" method="get" role="search">
            <input type="search" name="question" placeholder="поиск..."/>
            <button type="submit"><i className="icon-search main__search__icon"></i></button>
          </form>
        </nav>
      </div>
    )
  }
}

export default Header;
