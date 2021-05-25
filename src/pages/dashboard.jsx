import React, {useState, useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Avatar,
  MenuItem,
  Typography,
  IconButton,
  Popper,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener
} from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Panel from "./panel"
import Restaurants from './RestaurantPages/restaurants';
import Configs from './ConfigPages/configs';

import {getUserInfo} from '../redux/actions/userActions'
import {getClientsInfo} from '../redux/actions/clientsAction'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        overflowX: 'hidden'
    },

    appBar: {
        boxShadow: "5px 0px 15px #CCC",
        backgroundColor: "#FAFAFA",
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    hide: {
      display: 'none',
    },

    drawer: {
        
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
        backgroundColor: "#5980DD",
        color: "white",
        border: "none", 
        width: drawerWidth,
        overflowX: "hidden", 
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerClose: {
        backgroundColor: "#5980DD",
        color: "white",
        border: "none", 
        width: "55px",  
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        [theme.breakpoints.up('sm')]: {
          width: "55px",
      },
    },

    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },

    content: {
      textAlign: "start",
      flexGrow: 1,
      padding: theme.spacing(3)
    },
  }));

    
const Dashboard = () => {

    const { personalInfo } = useSelector((state) => state.user);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorMenuAvatar, setAnchorMenuAvatar] = useState(null);
    const [loading, setloading] = useState(false);

    const dispatch = useDispatch();

    //Redux
    const loadingScreen = async () => {
      setloading(true);
      dispatch(getUserInfo());
      dispatch(getClientsInfo());
      setloading(false);

    };
    

    //Drawers Handlers
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Menu Handlers
    const openAvatarMenu = (event) => {
      setAnchorMenuAvatar(event.currentTarget);
      setOpenMenu(true)
    }

    const closeAvatarMenu = () => {
      setAnchorMenuAvatar(null);
      setOpenMenu(false)
    }

    //useEffect
    useEffect(() => {
        loadingScreen();
        // eslint-disable-next-line
    }, []);

    if(loading) return(<div>Waiting Server...</div>)
    else return ( 
        <div className={classes.root}>
            <AppBar
              position="fixed"
              className={clsx(
                classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar style={{background: "inherit", display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                <List style={{background: "inherit", display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: "0"}}>


                  <ListItem style={{padding: "0"}}>
                    <IconButton><NotificationsIcon/> </IconButton>
                  </ListItem>

                  <ListItem style={{padding: "0"}}>
                    <Typography style={{color: "gray"}} noWrap>{personalInfo.name}</Typography>   
                    <Avatar 
                      style={{marginLeft: "15px", cursor: "pointer"}}
                      onClick={openAvatarMenu}
                      onMouseEnter={openAvatarMenu}
                      aria-controls="avatar-menu" aria-haspopup="true"
                      src= { personalInfo.img !== "" && personalInfo.img}
                    >
                      { personalInfo.img === "" && personalInfo.name[0]}
                    </Avatar>

                    <Popper open={openMenu} anchorEl={anchorMenuAvatar} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={closeAvatarMenu}>
                              <MenuList id="menu-list-grow" onMouseLeave={closeAvatarMenu}>
                                <MenuItem onClick={closeAvatarMenu}>Profile</MenuItem>
                                <MenuItem onClick={closeAvatarMenu}>My account</MenuItem>
                                <MenuItem onClick={closeAvatarMenu}>Logout</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>

                  </ListItem>
                </List>
              </Toolbar>

            </AppBar>
            <Router>
            <Drawer
              // onClick= { !open ? handleDrawerOpen : handleDrawerClose}
              onMouseEnter = {handleDrawerOpen}
              onMouseLeave = {handleDrawerClose}
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
              
                <List>
                
                  <br></br>
                  <br></br>
                  <br></br>

                  <ListItem button key="Inicio" component={Link} to="/">
                        <ListItemIcon><HomeIcon style={{color: "white"}}/> </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <br></br>
                    <ListItem button key="admin" component={Link} to="/admin">
                        <ListItemIcon><FolderIcon style={{color: "white"}}/> </ListItemIcon>
                        <ListItemText primary="Administracion" />
                    </ListItem>
                    <br></br>
                    <ListItem button key="Configuracion" component={Link} to="/config">
                        <ListItemIcon><SettingsIcon style={{color: "white"}}/> </ListItemIcon>
                        <ListItemText primary="Configuracion" />
                    </ListItem>
                  </List>
              
            </Drawer>
            <main className={classes.content}>
            <div className={classes.toolbar} />

              <Switch>

                <Route exact path="/">
                  <Restaurants></Restaurants>
                </Route>

                <Route path="/restaurants">
                  <Panel></Panel>
                </Route>

                <Route path="/config">
                  <Configs></Configs>
                </Route>

                <Route exact path="/admin">
                  <Panel></Panel>

                </Route>

              </Switch>
              
            </main>
            </Router>
          </div>
     );
}
 
export default Dashboard;