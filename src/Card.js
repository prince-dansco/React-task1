import React from "react";
import cardImage from "../src/image/card_1.jpg";

const Card = () => {
  return (
    <div className="container">
      <div className="author-content">
        <img src={cardImage} alt="" />
        <div className="author">
          <h1>Fire up your Motivation</h1>
          <p>
            when striving toward a goal, you must focus on what you want to
            obtain and avoid the impulse to go back to what you know and to what
            is comfortable.
          </p>
          <span>
            by <a href="#">klyle patterson</a>
          </span>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
