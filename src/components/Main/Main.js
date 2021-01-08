import './Main.css';
import About from '../About/About';
// import Preloader from '../Preloader/Preloader';
import Banner from '../Banner/Banner';

function Main(props) {
  return (
    <main className="main">
      <Banner {...props} />
      <About />
    </main>
  );
}

export default Main;
