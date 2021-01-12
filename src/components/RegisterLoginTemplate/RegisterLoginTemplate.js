import './RegisterLoginTemplate.css';
import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../Button/Button';

function AuthForm({
  type,
  title,
  switchForm,
  buttonName,
  linkName,
  handleSubmit,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useForm();

  const handleFormChange = (e) => {
    handleChange(e);
    // onChange(e);
  };

  const onSubmit = (e) => {
    handleSubmit(e, resetForm);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form className="register-login" onSubmit={onSubmit}>
      <h2 className="register-login__title popup__title">{title}</h2>
      <fieldset className="register-login__fieldset">
        <label className="register-login__label">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleFormChange}
            className="register-login__input"
            placeholder='Fill in email'
            required
            minLength="2"
            maxLength="80"
          />
          <span className="register-login__error">'Адрес электронной почты должен содержать символ "@". В адресе "cf" отсутствует символ "@".'{errors.email || ''}</span>
        </label>
        <label className="register-login__label">
          Password

          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleFormChange}
            className="register-login__input"
            placeholder='Fill in password'
            required
            minLength="6"
            maxLength="15"
          />
          <span
            className="register-login__error">'Текст должен быть не короче 6 симв. Длина текста сейчас: 1 символ.'{errors.password || ''}</span>
        </label>
        {type === 'register' && (
          <label className="register-login__label">
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleFormChange}
              className="register-login__input"
              placeholder='Fill in your name'
              id="register-name"
              minLength="2"
              maxLength="30"
              required
            />
            <span
              className="register-login__error">'Текст должен быть не короче 6 симв. Длина текста сейчас: 1 символ.'{errors.name || ''}</span>
          </label>
        )}
        <p className="register-login__error-total">
          'ОШИБКА'
        </p>
        <Button
          type="submit"
          buttonClasses="button_type_text button_type_submit register-login__button"
          disabled={!isValid}
        >
          {buttonName}
        </Button>
      </fieldset>
      <div className="register-login__link-box">
        or&nbsp;
        <a
          className="register-login__link popup__link"
          onClick={switchForm}
        >
          {linkName}
        </a>
      </div>
    </form>
  );
}

export default AuthForm;
