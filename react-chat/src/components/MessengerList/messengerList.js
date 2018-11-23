import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Contact from '../Contact/contact.js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '25%',
      maxWidth: 360,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500,
    },

});

class MessengerList extends Component {

    render() {
        const { classes } = this.props;
        return (
          <Paper className={classes.root}>
          <List>
            {this.props.contacts.map(contact => (
                <Contact key={contact.id} id={contact.id} name={contact.name} getOtherUserId={this.props.getOtherUserId}/>
            ))}
          </List>
          </Paper>
        );
    }
}

export default withStyles(styles)(MessengerList);

