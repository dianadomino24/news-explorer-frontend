import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { theme, openedPopup, isMenuOpened } = props;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
      <header className={`header header_theme_${theme} ${
        isMenuOpened ? '' : 'header_transparent'
      }`}>
          <Container>
            <Link className="header__logo" to="/" onClick={scrollToTop}>
              <Logo />
            </Link>
          {!openedPopup && <Hamburger {...props} />}
          <Navigation {...props} />
          </Container>
      </header>
  );
}

export default Header;
