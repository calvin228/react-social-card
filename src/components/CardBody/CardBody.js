import React from "react";
import "./CardBody.css";

const CardBody = props => {
  return (
      <div className="card-content">
        <p class="content">{props.data.content}</p>
        <img className="img-fluid content-image" src={props.data.imgContent}></img>
      </div>
  );
};

export default CardBody;
