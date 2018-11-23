import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import PortraitIcon from '@material-ui/icons/Portrait';

class Contact extends Component {

    render() {
        return(
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PortraitIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {this.props.name}
                />
                <ListItemSecondaryAction>
                <IconButton aria-label="Comments" onClick={this.handleButton}>
                  <CommentIcon />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    handleButton = () => {
        console.log(this.props.id);
        this.props.getOtherUserId(this.props.id);
    }
}

export default Contact;