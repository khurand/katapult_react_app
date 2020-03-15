import React from 'react';
import { Component } from 'react'
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { MainTimer } from './components/MainTimer';
import { PeriodesSessionTimer } from './components/PeriodesSessionTimer';
import { TeamScores } from './components/TeamScores';
import { Footer } from './components/Footer';
import { Divider } from '@material-ui/core';
import { Transition, animated } from 'react-spring/renderprops';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

class App extends Component {
  state = {
    toggleMenu: false
  }

  toggle = e => this.setState({ toggleMenu: !this.state.toggleMenu });

  render() {
    return (
      <div className="main">
        <GlobalProvider>
          <Header toggle={this.toggle} />
          <Transition
            native
            items={this.state.toggleMenu}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show => show && (props => (
              <animated.div style={props}>
                <Menu />
              </animated.div>
            ))}
          </Transition>
          <div className="container">
            <MainTimer />
            <Divider style={{ backgroundColor: "white", height: "2px" }} />
            <PeriodesSessionTimer />
            <Divider style={{ backgroundColor: "white", height: "2px" }} />
            <TeamScores />
          </div>
          <Footer />
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
