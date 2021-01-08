import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const {
    theme, openedPopup, isMenuOpened, scrollToTop,
  } = props;

  return (
    <header
      className={`header header_theme_dark header_theme_${theme} ${
        isMenuOpened ? '' : 'header_transparent'
      }`}
    >
      <Container>
        <div className={'header__container'}>
          <Link className="header__logo" to="/" onClick={scrollToTop}>
            <Logo/>
          </Link>
          {!openedPopup && <Hamburger {...props} />}
          <Navigation {...props} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
