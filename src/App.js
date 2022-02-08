import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Pape Djiby Aly Ndione",
      bio: "24 yo, Single, live in Dakar",
      imgSrc:
        "https://i.pinimg.com/originals/e4/a6/33/e4a6338e34235eb1605e7c915a6debad.jpg",
      profession: "Fullstack js developer at Gomycode",
      shows: false,
      date: 0,
    };
    this.showProfile = this.showProfile.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.setState({
      date: 0,
    });
  }

  tick() {
    this.setState({
      date: this.state.date + 1,
    });
  }

  showProfile() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.fullName}</h1>
        {this.state.shows && (
          <img style={{ width: "30%" }} src={this.state.imgSrc} alt="profile" />
        )}
        <p>{this.state.bio}</p>
        <h4>{this.state.profession}</h4>
        <button onClick={this.showProfile}>Show profile</button>
        <h2>
          It's been <span style={{ color: "red" }}>{this.state.date}</span>{" "}
          seconds since the last component was mounted.
        </h2>
      </div>
    );
  }
}

// function App() {
//   return <div className="App"></div>;
// }

// export default App;
