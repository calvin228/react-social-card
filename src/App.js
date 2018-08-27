import React, { Component } from "react";
import "./App.css";
import SocialCards from "./components/SocialCards";

const data = [
  {
    name: "Carl Johnson",
    profileImg:
      "http://walkingthefloor.com/wp-content/uploads/2014/11/John-Doe.jpg",
    imgContent: "http://4.bp.blogspot.com/-wNW7xmixl1o/VcSnry5SgNI/AAAAAAABK3s/cMLYKa6kibw/s640/DSC08490.jpg",
    time: "10:30 AM",
    content: "Today is very good day!",
    like: 2,
    share: 10
  },
  {
    name: "Jenna Doe",
    profileImg:
      "https://cdn-az.allevents.in/banners/3000e245e5cdf436d761d94555a0e07c-rimg-w200-h200-gmir.jpg",
    imgContent: "https://italianrentalblog.files.wordpress.com/2013/12/121022478.jpg?w=1200",
    time: "08:55 PM",
    content: "Best trip ever!! I'll come back to you again Maldives <3",
    like: 25,
    share: 4
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialCards data={data} />
      </div>
    );
  }
}

export default App;
