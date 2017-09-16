import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div className='page'>
        <FillerText>The worlds coolest webpage</FillerText>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
