import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import Counter from './components/counter';
import Temperature from './components/temperature';
import Todos from './components/todos';
import './App.css';
import Weather from './components/weather';


class App extends Component {
  render() {
    return (
    <div className="padding-top">
      <DevTools />
      <Counter/>
      <Temperature/>
      <Todos/>
      <Weather/>
    </div>
    );
  }
}

export default App;