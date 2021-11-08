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
    role:""
  }

  changeHandler= (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form 
        change = {this.changeHandler}
        />
        <View 
        first={this.state.firstname}
        last={this.state.lastname}
        phone={this.state.phonenumber}
        message={this.state.message}
        role={this.state.role}
        />
        <Popup 
        popup={this.state.showPopup}
        />

      </div>
    );
  }
}

export default App;
