import './Banner.css';
import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';

function Banner(props) {
  return (
    <section className="banner">
      <Container>
        <div className="banner__container">
          <div className="banner__text">
            <h1 className="banner__title">
              Что творится в мире?
            </h1>
            <p className="banner__description">
              Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
            </p>
          </div>
          <SearchForm {...props} />
        </div>
      </Container>
    </section>
  );
}

export default Banner;
