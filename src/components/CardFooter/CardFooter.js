import React from "react";
import "./CardFooter.css";

const CardFooter = props => {
  return (
    <div className="card-footer">
        <button className="btn-like fa fa-thumbs-o-up">
          <span className="like"> {props.data.like}</span>
        </button>
        <button className="btn-share fa fa-share">
          <span className="share"> {props.data.share}</span>
        </button>

    </div>
  );
};

export default CardFooter;
