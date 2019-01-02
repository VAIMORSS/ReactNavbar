import React, {Component} from "react";

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Tabs, Tab} from '@material-ui/core';
import './App.css';


class App extends Component {
  render() {
      return (
        <div>
          <Nav/>
        </div>
        );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <AppBar position="static" title="My App">
      <Toolbar>
        <Typography className="title" varient="title" color="inherit" >
                DocPet
        </Typography>
        <Tabs>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </Toolbar>
      </AppBar>
    )
  }
}


class NavBar extends Component {
  render() {
      return (
        <div>
          <AppBar postion="static">
            <Toolbar>
              <Typography varient="title" color="inherit" >
                DocPet
              </Typography>
              <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
              <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              //className={classes.menuButton}

              >
              <MenuIcon />
            </IconButton>
            
            </Toolbar>
          </AppBar>
          
        </div>
        );
  }
}

export default App;

// class App extends Component {
//   render() {
//       return (
        
//         );
//   }
// }
