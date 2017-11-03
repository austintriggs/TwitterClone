import React, { Component } from 'react';
import axios from 'axios';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            email: '',
            newEmail: '',
            password: '',
            newPassword: '',
            showUsername: false,
            showEmail: false,
            showPassword: false
            
          };
    
        this.userInput = this.userInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showUsername = this.showUsername.bind(this);
        this.showEmail = this.showEmail.bind(this);
        this.showPassword = this.showPassword.bind(this);
      }

      showUsername(e) {
          e.preventDefault();
          this.setState({showUsername: !this.state.showUsername})
      }
      showEmail(e) {
          e.preventDefault();
          this.setState({showEmail: !this.state.showEmail})
      }
      showPassword(e) {
          e.preventDefault();
          this.setState({showPassword: !this.state.showPassword})
      }
    
      userInput(input, type) {
          console.log('User input function:');
          switch(type) {
              
              case 'handle':
                  console.log('   Setting handle state:', input)
                  this.setState({handle: input})
                  break;
  
              case 'email':
                  console.log('   Setting email state:', input)
                  this.setState({email: input})
                  break;
  
              case 'newEmail':
                  console.log('   Setting newEmail state:', input)
                  this.setState({newEmail: input})
                  break;
              
              case 'password':
                  console.log('   Setting password state:', input)
                  this.setState({password: input})
                  break;
  
              case 'newPassword':
                  console.log('   Setting newPassword state:', input)
                  this.setState({newPassword: input})
                  break;
          }
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          
          <form onSubmit={this.handleSubmit}>
          <button onClick={this.showUsername}>Change Username</button>
            <label style={{'display' : this.state.showUsername ? 'block' : 'none'}}>
              New Username:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'handle')}} />
            </label>
            <button onClick={this.showEmail}>Change Email</button>
            <label style={{'display' : this.state.showEmail ? 'block' : 'none'}} >
              Current Email:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'email')}} />
            </label>
             <label style={{'display' : this.state.showEmail ? 'block' : 'none'}}>
              New Email:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'newEmail')}} />
            </label>
            <button onClick={this.showPassword}>Change Password</button>
            <label style={{'display' : this.state.showPassword ? 'block' : 'none'}}>
              Current Password:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'password')}} />
            </label>
            <label style={{'display' : this.state.showPassword ? 'block' : 'none'}}>
              New Password:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'newPassword')}} />
            </label>
            <input type="submit" value="Submit" />
          </form>
      );
    }
  }
