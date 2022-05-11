import logo from '../images/header/logo.svg';

const Header = () => {
    return (
        <header className="header section">
            <img src={logo} alt="Логотип сайта" className="header__logo" />
        </header>
    )
}

export default Header;
