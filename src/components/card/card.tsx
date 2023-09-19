import "./card.css";
import "./flip-transition.css";

function Card({ onClick, english, portuguese }: any) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">{english}</div>
      <div className="card-front">{portuguese}</div>
    </div>
  );
}

export default Card;
