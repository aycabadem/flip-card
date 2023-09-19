import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard({ english, portuguese }: any) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          english={english}
          portuguese={portuguese}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
