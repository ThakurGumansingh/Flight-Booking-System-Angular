// import React, { PureComponent as Component } from 'react';
import React from 'react';

function ReservationStatus(props) {
    return (
      <div style={{color: 'white'}}className="res-status">
        { props.status }
      </div>
    );
}

export default ReservationStatus;
