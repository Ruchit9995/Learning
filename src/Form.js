import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      Password: "",
      PhoneNumber: "",
      userError: "",
      PasswordError: "",
      PhoneNumberError: "",
    };
  }
  valid() {
    if (
      !this.state.user.includes("@") &&
      this.state.Password.length < 7 &&
      this.state.PhoneNumber.length < 10
    ) {
      this.setState({
        userError: "Invalid Name",
        PasswordError: "password lenght more than 7 ",
        PhoneNumberError: "Not valid",
      });
    } else if (!this.state.user.includes("@")) {
      this.setState({ userError: "Invalid Name" });
    } else if (this.state.Password.length < 7) {
      this.setState({ PasswordError: "password lenght more than 7 " });
    } else if (this.state.PhoneNumber.length < 10) {
      this.setState({ PhoneNumberError: "Not Valid" });
    } else {
      return true;
    }
  }
  submit() {
    if (this.valid()) {
      alert("Sumbited");
    }
    // alert("submit")
  }
  render() {
    return (
      <div className="Form">
        <h1>Login</h1>
        <label>Email: </label>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ user: event.target.value });
          }}
        />
        <p>{this.state.userError}</p>
        <label>Password: </label>
        <input
          type="Password"
          onChange={(event) => {
            this.setState({ Password: event.target.value });
          }}
        />
        <p>{this.state.PasswordError}</p>
        <label>Phone Number: </label>
        <input
          type="text"
          maxLength="10"
          onChange={(event) => {
            this.setState({ PhoneNumber: event.target.value });
          }}
        />
        <p>{this.state.PhoneNumberError}</p>

        <button onClick={() => this.submit()}>submit</button>
      </div>
    );
  }
}

export default Form;
