import React from 'react';
import { Header } from './components/Header';
import { MainTimer } from './components/MainTimer';
import { PeriodesSessionTimer } from './components/PeriodesSessionTimer';
import { TeamScores } from './components/TeamScores';
import { Footer } from './components/Footer';
import { Divider } from '@material-ui/core';
import './App.css';

function App() {

  const dividerStyle = {
    backgroundColor: "white",
    height: "2px"
  };

  return (
    <div>
      <Header />
      <div className="container">
        <MainTimer />
        <Divider style={dividerStyle} />
        <PeriodesSessionTimer />
        <Divider style={dividerStyle} />
        <TeamScores />
      </div>
      <Footer />
    </div>
  );
}

export default App;
