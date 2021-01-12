import './Main.css';
import About from '../About/About';
// import Preloader from '../Preloader/Preloader';
import Banner from '../Banner/Banner';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main(props) {
  return (
    <main className="main">
      <Banner {...props} />
      <NewsCardList
        {...props}
      >
      </NewsCardList>
      <About/>
    </main>
  );
}

export default Main;
