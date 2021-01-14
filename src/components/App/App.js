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
import Overlay from '../Overlay/Overlay';
import { initialCards } from '../../utils/constants';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({ name: 'Leo', _id: null });
  const [openedPopup, setOpenedPopup] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('dark');
  const [isLoggedIn, setLoggedIn] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(initialCards);
  // eslint-disable-next-line no-unused-vars
  const [keywords, setKeywords] = useState(['Nature', 'Birds', 'Travel', 'Sea']);
  // eslint-disable-next-line no-unused-vars
  const [savedArticles, setSavedArticles] = useState(initialCards);
  // eslint-disable-next-line no-unused-vars
  const [notFound, setNotFound] = useState(true);

  const openPopup = (popup) => {
    setOpenedPopup(popup);
  };

  const toggleNavMenu = (value) => {
    setIsNavMenuOpened(value);
  };

  const closePopup = () => {
    toggleNavMenu(false);
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

  function handleLogin(email, password, resetForm) {
    console.log(email, password, resetForm);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          theme={theme}
          isLoggedIn={isLoggedIn}
          openPopup={openPopup}
          openedPopup={openedPopup}
          signOut={signOut}
          isNavMenuOpened={isNavMenuOpened}
          scrollToTop={scrollToTop}
          toggleNavMenu={toggleNavMenu}
          currentUser={currentUser}
        />
        {isNavMenuOpened && <Overlay closePopup={closePopup}/>}

        <PopupWithForm
          openedPopup={openedPopup}
          openPopup={openPopup}
          closePopup={closePopup}
          handleLogin={handleLogin}
        />

        <Switch>
          <ProtectedRoute
            path="/saved-news"
            isLoggedIn={isLoggedIn}
            component={SavedNews}
            setTheme={setTheme}
            savedArticles={savedArticles}
            keywords={keywords}
          />

          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
              cards={cards}
              notFound={notFound}
            />
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>

        <Footer scrollToTop={scrollToTop}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
