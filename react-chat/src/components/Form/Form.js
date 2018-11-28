import React, { Component } from 'react';
import './Form.css';
import { 
    sendMessage,
    registerListener
   } from '../Socket';
import Message from '../Message/Message';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            message: '',
            list: [],
        };
        
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.user) {
            this.setState({ 'userName': nextProps.user.name });
        }
        this.listenMessages();
    }
    handleChange(event) {
        this.setState({ message: event.target.value });
        this.listenMessages();
    }
    handleSend() {
        console.log('Sending message');
        if (this.state.message) {
            var newItem = {
                userName: this.state.userName,
                message: this.state.message,
            }
            sendMessage(newItem);
            // this.messageRef.push(newItem);
            this.setState({ message: '' });
        }
    }
    handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
    }
    listenMessages() {
        console.log('listening for messages');
        registerListener(message => {
            this.setState({
                list: message,
            });
        });
    }

    concactIds(uid, otherid) {
        let result = uid.localeCompare(otherid);
        if (result == 0) {
            return uid;
        } else if (result == 1) {
            return uid.concat(otherid);
        } else {
            return otherid.concat(uid);
        }
    }

    render() {
        return (
            <div className="form">
                <div className="form__message">
                    {this.state.list.map((item, index) =>
                        <Message key={index} message={item} />
                    )}
                </div>
                <div className="form__row">
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Type message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    <button
                        className="form__button"
                        onClick={this.handleSend.bind(this)}
                    >
                        send
            </button>
                </div>
            </div>
        );
    }
}