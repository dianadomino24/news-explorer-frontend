import './Main.css';
import About from '../About/About';
// import Preloader from '../Preloader/Preloader';
import Banner from '../Banner/Banner';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function Main({ searchResults, ...props }) {
  return (
    <main className="main">
      <Banner {...props} />
       {searchResults === 'searching' && <Preloader/>}
       {searchResults === 'notFound' && <NotFound/>}
       {searchResults === 'found' && (
       <NewsCardList
        type='search'
        {...props}
       >
       </NewsCardList>
       )}
      <About/>
    </main>
  );
}

export default Main;
