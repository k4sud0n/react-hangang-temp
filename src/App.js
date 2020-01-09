import React, { Component } from 'react';
import Image from './components/Image';
import Temperature from './components/Temperature';

class App extends Component {
  render() {
    return (
      <div>
        <Image />
        <Temperature />
      </div>
    )
  }
}

export default App;
