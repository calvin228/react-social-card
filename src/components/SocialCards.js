import React, { Component } from "react";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";

class SocialCards extends Component {
  render() {
    return this.props.data.map(data => {
      return (
        <div className="card">
          <CardHeader data={data} />
          <CardBody data={data} />
          <CardFooter data={data} />
        </div>
      );
    });
  }
}

export default SocialCards;
