import React, { Component } from "react";
import Header from "./components/Header";
// import Menu from "./components/Menu";
import MainTimer from "./components/MainTimer";
import PeriodesSessionTimer from "./components/PeriodesSessionTimer";
import TeamScores from "./components/TeamScores";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <div className='container'>
          <MainTimer />
          <PeriodesSessionTimer />
          <TeamScores />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
