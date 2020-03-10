import React from 'react';
import { Header } from './components/Header';
import { MainTimer } from './components/MainTimer';
import { PeriodesSessionTimer } from './components/PeriodesSessionTimer';
import { TeamScores } from './components/TeamScores';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <MainTimer />
        <PeriodesSessionTimer />
        <TeamScores />
      </div>
      <Footer />
    </div>
  );
}

export default App;
