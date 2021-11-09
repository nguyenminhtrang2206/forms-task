import './App.css';
import React, { Component } from 'react';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {
  state = {
    showPopup: false,
    firstname: "",
    lastname:"",
    phonenumber:"",
    message:"",
    role:"",
  }

  changeHandler = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true })
  }

  render() {
    const props = {
      first: this.state.firstname,
      last: this.state.lastname,
      phone: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role
    }
    return (
      <div className="max-width">
        <Form 
        change = {this.changeHandler}
        submit = {this.popupHandler}
        />
        <View {...props} />
        {this.state.showPopup && <Popup {...props}/>}

      </div>
    );
  }
}

export default App;
