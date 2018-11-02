import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
 
class Contact extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };
  
  render() {
    return (
      <div>
        <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Tell me about yourself..."
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>

      </div>
    );
  }
}
 
export default Contact;