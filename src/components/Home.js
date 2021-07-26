import React, {PureComponent as Component} from 'react';
import SignIn from './SignIn'
//import SignUp from './SignUp'

class Home extends Component{

  render(){
    return (
      <div div style={{fontFamily: 'TimesNewRoman', color: 'Yellow'}} className="login-form">
        <div className="flex-header">
          <div className="flex-1">
            <h1 className="logo login-logo">KARACHI AIRLINES</h1>
            <h2 className="welcome">Welcomes you!</h2>
          </div>
          <div className="flex-1">
            <img src="http://karachiairport.com.pk/images/data-section/airline/19-11.png" alt="Airlines"/>
          </div>
        </div >
        <h3>
        <p style={{color: 'yellow'}} >Have an account already? Please login below.</p>
        </h3>
        <SignIn />
        <p style={{color:'White', backgroundColor: 'Blue'}}>If you need a customer account, call 777 Karachi Airlines and we'd love to help.</p>
        <p style={{color:'Black'}}>Create Account</p>
        <button style={{backgroundColor: 'teal', color: 'white', float:'left'}}className="res-button chat-button">
          Sign Up
          {/* <SignUp /> */}
        </button>
      </div>
    );
  }
}

export default Home;
