// import React, { PureComponent as Component } from 'react';
import React from 'react';

function FlightInfo (props) {
  return (
    <div style={{backgroundColor: 'teal', color: 'white'}}>
      <h5>
      Flight Number: { props.flightNumber }
      </h5>
    </div>
  );
}

export default FlightInfo;
