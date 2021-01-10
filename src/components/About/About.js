import './About.css';
import Container from '../Container/Container';
import author from '../../images/diana.jpg';
import { texts } from '../../utils/constants';

function About() {
  return (
    <Container>
      <section className="about">
        <img className="about__photo" src={author} alt='Author photo'/>
        <div className="about__description">
          <h2 className="about__title">About me</h2>
          <p className="about__text">
            {texts.aboutDescription1}
          </p>
          <p className="about__text">
            {texts.aboutDescription2}
          </p>
        </div>

      </section>
    </Container>
  );
}

export default About;
