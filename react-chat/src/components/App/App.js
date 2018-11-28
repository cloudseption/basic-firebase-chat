import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer } from '../Socket';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import firebaseConfig from '../../config';
import MessengerList from '../MessengerList/messengerList.js';
import Appbar from '../App_bar/app_bar.js';
import axios from "axios";

firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer();
    this.state = {
      user: null,
      otherUserId: '',
      contacts: []
    }
  }
  componentDidMount() {

    axios
      .get(
        'http://polar-citadel-36387.herokuapp.com/api/users'
      )
      .then(response => {
        this.setState({
          contacts: response.data
        });
      });

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
  });

  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          {!this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
              <button
                className="app__button"
                onClick={this.handleLogOut.bind(this)}
              >
                Logout
            </button>
            )}
        </div>
        <Appbar />
        <MessengerList contacts={this.state.contacts} getOtherUserId={this.getOtherUserId} />    
        <div className="app__list">
            <Form user={this.state.user} otherUserId={this.state.otherUserId} />
        </div>
      </div>
    );
  }

  getOtherUserId = (uid) => {
    this.setState({
      otherUser : uid
    })
    console.log(uid);
  }
}
export default App;