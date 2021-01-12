import './Overlay.css';

function Ovelay({ closePopup }) {
  return (
    <div
      className="overlay"
      onClick={closePopup}
    ></div>
  );
}

export default Ovelay;
