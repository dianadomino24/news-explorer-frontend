import './Main.css';
import About from '../About/About';
// import Preloader from '../Preloader/Preloader';
import Banner from '../Banner/Banner';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';

function Main({ notFound, ...props }) {
  return (
    <main className="main">
      <Banner {...props} />
      {notFound && <NotFound/>}
      <NewsCardList
        type='search'
        {...props}
      >
      </NewsCardList>
      <About/>
    </main>
  );
}

export default Main;
