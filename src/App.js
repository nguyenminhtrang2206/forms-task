import "./App.css";
import React, { Component } from "react";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import axios from "axios";

class App extends Component {
  state = {
    showPopup: false,
    id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/note")
      .then((res) => this.setState({ data: res.data }));
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  render() {
    const props = {
      first: this.state.firstname,
      last: this.state.lastname,
      phone: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role,
    };
    return (
      <div className="max-width">
        <div className="form-area">
          <Form change={this.changeHandler} submit={this.popupHandler} />
          <View {...props} />
        </div>
        {this.state.showPopup && <Popup {...props} />}
        {this.state.data.map((note) => (
          <Notes {...note} />
        ))}
      </div>
    );
  }
}

export default App;
