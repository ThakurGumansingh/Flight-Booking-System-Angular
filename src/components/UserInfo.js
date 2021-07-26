// import React, { PureComponent as Component } from 'react';
import React from 'react';

function UserInfo (props) {
  return (
    <div style={{color: 'white',tabSize:'4'}}> 
    <h5>
      Passenger Name: { props.userName }
    </h5>
    </div>
  );
}

export default UserInfo;
