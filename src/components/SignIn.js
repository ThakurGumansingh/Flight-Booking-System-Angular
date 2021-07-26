import React, {PureComponent as Component} from 'react';


class SignupForm extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    const ghUrl = "http://localhost:3000"; 
    e.preventDefault();
    if (this.state.password === "friends") {
       if (this.state.username === "Haneen") {
        window.location.href = `${ghUrl}/#/haneen`;
        }
        if (this.state.username === "Afreen") {
          window.location.href = `${ghUrl}/#/afreen`;
        }
    }
    else {
      window.location.href = ghUrl;
    }

  }


  render(){
    return (
      <form onSubmit = {this.onSubmit} className="login" >
        <div className="login-field">
        <label className="login-label"> Username</label>
        <input
          className="search-user"
          value = {this.state.username}
          onChange = {this.onChange}
          type = "text"
          name = "username"
          placeholder ="Enter your username"
        />
        </div>

        <div className="login-field">
        <label className="login-label">Password</label>
        <input
          className="search-user"
          value = {this.state.password}
          onChange = {this.onChange}
          type = "password"
          name = "password"
          placeholder ="Enter your password"
        />
        </div>

        <div>
          <button style={{color: 'Blue'}}className="res-button login-button">
           Sign In
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
