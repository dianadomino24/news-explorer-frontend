import './SearchForm.css';
import Button from '../Button/Button';

function SearchForm({ setSearchState }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // !!!!!!!! temporary
    setSearchState('found');
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
