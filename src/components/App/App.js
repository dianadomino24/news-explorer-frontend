import './App.css';
import { useState } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({ name: '', _id: null });
  const [openedPopup, setOpenedPopup] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('transparent');
  const [isLoggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const history = useHistory();

  const openPopup = (popup) => {
    setOpenedPopup(popup);
  };

  const closePopup = () => {
    setOpenedPopup('');
  };

  function signOut() {
    // removeToken()
    setLoggedIn(false);
    history.push('/sign-in');
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const toggleNavMenu = (value) => {
    setIsMenuOpened(value);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          theme={theme}
          isLoggedIn={isLoggedIn}
          openPopup={openPopup}
          openedPopup={openedPopup}
          signOut={signOut}
          isMenuOpened={isMenuOpened}
          scrollToTop={scrollToTop}
          toggleNavMenu={toggleNavMenu}
        />
        {openedPopup && (
          <PopupWithForm
            openedPopup={openedPopup}
            openPopup={openPopup}
            closePopup={closePopup}
          />
        )}
        <Switch>
          <ProtectedRoute
            path="/saved-news"
            isLoggedIn={isLoggedIn}
            component={SavedNews}
            // setTheme={changeTheme}
            // savedData={savedData}
            // getArticles={getArticles}
            // removeArticle={removeArticle}
            // keywords={keywords}
            // setKeywords={setKeywords}
            // checkCookie={checkCookie}
          />

          <Route exact path="/">
            <Main
              // newsData={newsData}
              // setNews={setNews}
              // currentData={currentData}
              // setData={setData}
              isLoggedIn={isLoggedIn}
              // searchStatus={searchStatus}
              // setSearch={setSearch}
              // getNews={getNewsFromApi}
              // saveArticle={saveArticle}
              // removeFromStorage={removeFromStorage}
            />
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>

        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
