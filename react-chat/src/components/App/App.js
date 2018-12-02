import React, { Component } from 'react';
import './App.css';
import { 
  selectConversationPartner
 } from '../Socket';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import firebaseConfig from '../../config';
import MessengerList from '../MessengerList/messengerList.js';
import axios from "axios";
import Toolbar from "../Toolbar/Toolbar";
import Backdrop from "../BackDrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";

firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      otherUserId: '',
      contacts: []
    }
  }
  componentDidMount() {
    let queriedUser = this.getQueriedUserId();

    axios
      .get(
        'http://polar-citadel-36387.herokuapp.com/api/users'
      )
      .then(response => {
        this.setState({
          contacts: response.data
        });
        return response;
      })
      .then(response => {
        try {
          if (!queriedUser) {
            return;
          }
  
          const matchingUser = response.data.find(user => user.userId.match(queriedUser));
          if (matchingUser) {
            this.getOtherUserId(queriedUser)
          }
        } catch (err) {
          console.log(err);
        }
      });
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="app">
        <div className="app__header row">
          <Toolbar signOut={this.signOut} drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer signOut={this.signOut} show={this.state.sideDrawerOpen} />
        </div>
        <div className="row">
          <div className="col-4 cozy">
            <MessengerList contacts={this.state.contacts} getOtherUserId={this.getOtherUserId} />    
          </div>
          <div className="col-8 cozy">
              <Form user={this.state.user} otherUserId={this.state.otherUserId} />
          </div>
        </div>
      </div>
    );
  }

  getOtherUserId = (uid) => {
    this.setState({
      otherUser : uid
    })
    selectConversationPartner(uid);
    console.log(uid);
  }

  signOut = () => {
    window.badgeBookTokenHandler.clearAccessToken();
    window.location = `https://polar-citadel-36387.herokuapp.com/auth/login.html`;
  }

  getQueriedUserId = () => {
    try {
      let url           = new URL(window.location);
      return url.searchParams.get('chat-with').trim();
    } catch (err) {
      return null;
    }
  }
}
export default App;