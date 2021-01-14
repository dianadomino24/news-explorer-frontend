import './SavedNewsHeader.css';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';

function SavedNewsHeader({ savedArticles, keywords }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Container>
    <div className="saved-news-header">
      <p className="saved-news-header__heading">'Bookmarks</p>
      <SectionTitle
        classes="saved-news-header__title"
        title={
          `${currentUser.name}, you have ${
            savedArticles.length
          } saved articles `
        }
      />
      <p className="saved-news-header__keywords-text">
        {'on these keywords:&nbsp'}
        {keywords[0] && (<span className="saved-news-header__keyword">{keywords[0]}</span>)}
        {keywords[1] && (<>, <span className="saved-news-header__keyword">{keywords[1]}</span></>)}
        {keywords[2] && (<> и <span className="saved-news-header__keyword">{keywords[2]}</span></>)}
      </p>
    </div>
    </Container>
  );
}

export default SavedNewsHeader;
