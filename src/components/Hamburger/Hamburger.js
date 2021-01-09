import './Hamburger.css';

function Hamburger({ theme, isNavMenuOpened, toggleMenu }) {
  const handleHambClick = () => {
    toggleMenu(!isNavMenuOpened);
  };
  return (
    <div
      className={`hamburger hamburger_theme_${theme} ${
        isNavMenuOpened ? 'hamburger_close' : ''
      }`}
      onClick={handleHambClick}
    >
      <div className="hamburger__open"></div>
    </div>
  );
}

export default Hamburger;
