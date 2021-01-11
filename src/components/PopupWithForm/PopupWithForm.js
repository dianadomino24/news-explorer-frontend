import './PopupWithForm.css';
// import { useEffect, useCallback } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RegisterSuccess from '../RegisterSuccess/RegisterSuccess';

function PopupWithForm({
  openedPopup, openPopup, closePopup, ...props
}) {
  function handleEscClose(e) {
    if (e.key === 'Escape') {
      window.removeEventListener('keydown', handleEscClose);
      closePopup();
    }
  }

  function closeByClickingOverlay(e) {
    if (e.target === e.currentTarget) {
      window.removeEventListener('keydown', handleEscClose);
      closePopup();
    }
  }

  if (openedPopup) {
    window.addEventListener('keydown', (evt) => handleEscClose(evt));
  }

  return (
      <section className={`popup ${openedPopup && 'popup_opened'}`} onClick={closeByClickingOverlay}>
        <div className="popup__container">
          <button
            className="button button_type_close"
            onClick={closePopup}
          />
          {openedPopup === 'login' && (
            <Login type={openedPopup} {...props }
            />
          )}
          {openedPopup === 'register' && (
            <Register type={openedPopup} { ...props }
            />
          )}
          {openedPopup === 'register-success' && (
            <RegisterSuccess type={openedPopup} {...props }/>
          )}
        </div>
      </section>
  );
}

export default PopupWithForm;
