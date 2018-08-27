import React from "react";
import "./CardHeader.css";

const CardHeader = props => {
  return (
    <div className="row card-header">
      <div className="col-md-12 col-xs-12">
        <img className="circle" src={props.data.profileImg} />
        <h5 className="name">{props.data.name}</h5>
        <p>
          <small class="text-muted">Posted at {props.data.time}</small>
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
