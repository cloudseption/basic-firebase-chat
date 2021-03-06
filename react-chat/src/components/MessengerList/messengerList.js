import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Contact from '../Contact/contact.js';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        maxHeight: '100vh',
        minHeight: '100%',
        marginRight: 20,
        padding: 0,
        float: 'left',
    },

    list: {
        marginTop: '-2.5em',
        paddingTop: '4em',
        maxHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll'
    }

});

class MessengerList extends Component {

    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
          <Paper>
          <List className={classes.list}>
            {this.props.contacts.map(contact => (
                <Contact key={contact._id} id={contact.userId} name={contact.name} 
                 picture={contact.picture} getOtherUserId={this.props.getOtherUserId}/>
            ))}
          </List>
          </Paper>
          </div>
        );
    }
}

export default withStyles(styles)(MessengerList);

