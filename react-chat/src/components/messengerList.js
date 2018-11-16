import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Contact from './contact';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '25%',
      maxWidth: 360,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500
    },

});

class MessengerList extends Component {

    state = {
        contacts : [
            {id: 1, name: 'John Smith'},
            {id: 2, name: 'Daniel Zhang'},
            {id: 3, name: 'Alex Campbell'},
            {id: 4, name: 'Justin H'},
            {id: 5, name: 'John Smith'},
            {id: 6, name: 'Daniel Zhang'},
            {id: 7, name: 'Alex Campbell'},
            {id: 8, name: 'Justin H'},
            {id: 9, name: 'John Smith'},
            {id: 10, name: 'Daniel Zhang'},
            {id: 11, name: 'Alex Campbell'},
            {id: 12, name: 'Justin H'},
            {id: 13, name: 'John Smith'},
            {id: 14, name: 'Daniel Zhang'},
            {id: 15, name: 'Alex Campbell'},
            {id: 16, name: 'Justin H'}
        ]
    }
   
    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
          <Paper className={classes.list}>
          <List>
            {this.state.contacts.map(contact => (
                <Contact key={contact.id} name={contact.name} />
            ))}
          </List>
          </Paper>
          </div>
        );
    }
}

export default withStyles(styles)(MessengerList);

