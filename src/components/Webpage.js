import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div className='page'>
        <h1>The world\'s coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
