import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div className='page'>
        <title>The worlds coolest webpage</title>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
