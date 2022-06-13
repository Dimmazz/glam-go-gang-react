export default function HeaderNav(params) {
  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="#header">Начало</a></li>
        <li className="nav__item"><a href="#music">Музыка</a></li>
        <li className="nav__item"><a href="#gallery">Галерея</a></li>
        {/* <li className="nav__item"><a href="#">Концерты</a></li> */}
        <li className="nav__item"><a href="#about">О Нас</a></li>
        <li className="nav__item"><a href="#contacts">Контакты</a></li>
      </ul>
    </nav>
  );
};
