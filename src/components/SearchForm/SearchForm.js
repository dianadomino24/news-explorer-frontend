import './SearchForm.css';
import React from 'react';
import Button from '../Button/Button';

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="search-form"
        className="search-form__input"
        placeholder={'Fill in the search keywords'}
        required
      />
      <Button buttonClasses="button_type_text button_type_submit search-form__button" type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
