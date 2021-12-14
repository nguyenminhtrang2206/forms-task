import "./App.css";
import React, { Component } from "react";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/note")
      .then((res) => this.setState({ data: res.data }));
  }

  changeHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  postHandler = (e) => {
    axios
      .post("http://localhost:3001/note", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.log(error));
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  render() {
    return (
      <div className="max-width">
        <div className="form-area">
          <Form change={this.changeHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
        </div>
        {this.state.showPopup && (
          <Popup {...this.state.inputData} post={this.postHandler} />
        )}
        <div className="note-section" >
          <p>Notes</p>
        {this.state.data.map((note) => (
          <Notes {...note} key={note.id} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
