import './NewsCard.css';
import { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../Button/Button';
import InfoDetail from '../InfoDetail/InfoDetail';
import notFoundImg from '../../images/not-found-img.svg';

function NewsCard({
  card, isLoggedIn,
}) {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = card;
  const cardElement = useRef();
  // const button = useRef();
  const infoDetail = useRef();

  const showDetail = () => {
    infoDetail.current.classList.add('info-detail_visible');
  };
  const hideDetail = () => {
    infoDetail.current.classList.remove('info-detail_visible');
  };

  // const handleSave = async () => {
  //   await saveArticle(card);
  //   button.current.classList.add('button_type_icon_saved');
  // };
  return (
    <li className="news-card" ref={cardElement}>
        <img
          className="news-card__image"
          src={image || notFoundImg}
          alt={title}
        />
      )
      <Switch>
        <Route path="/">
          {!isLoggedIn && (
            <InfoDetail classes='' refObj={infoDetail}>
              Log in to add bookmarks
            </InfoDetail>
          )}
          <Button
            // forwardedRef={button}
            onMouseEnter={isLoggedIn ? null : showDetail}
            onMouseLeave={isLoggedIn ? null : hideDetail}
            buttonClasses="button_type_icon button_type_icon_bookmark"
            // onClick={isLoggedIn ? handleSave : undefined}
          />
        </Route>
        <Route path="/saved-news">
          {keyword && <p className="news-card__tag">{keyword}</p>}
          <InfoDetail classes='' refObj={infoDetail}>
            Remove from bookmarks
          </InfoDetail>
          <Button
            onMouseEnter={showDetail}
            onMouseLeave={hideDetail}
            // onClick={handleRemove}
            buttonClass="button button_type_icon button_type_icon_trash"
          />
        </Route>
      </Switch>

      <div className="news-card__info">
        <a
          href={link}
          className="news-card__link"
          target="_blank"
        >
          <time className="news-card__date" dateTime={date}>
            12.20.2020 {date}
          </time>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__text">{text}</p>
          <p className="news-card__source">{source}</p>
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
