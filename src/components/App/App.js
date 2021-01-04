import './App.css';
import React from 'react';
import { useCallback, useState, useEffect } from 'react';
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

  const [currentUser, setCurrentUser] = useState({ name: '', _id: null});
  const [openedPopup, setOpenedPopup] = useState('');
  const [theme, setTheme] = useState('transparent');
  const [isLoggedIn, setLoggedIn] = useState(false);

    const openPopup = (popup) => {
    setOpenedPopup(popup);
  };

    const closePopup = () => {
    setOpenedPopup('');
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
            <Redirect to="/" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
