import React from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import CheckBox from '@material-ui/icons/CheckBox';
import LocalAtm from '@material-ui/icons/LocalAtm';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Person from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoney from '@material-ui/icons/AttachMoney';
import StoreIcon from '@material-ui/icons/Store';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import '../App.css';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            open: false,
            left: false,
            anchorEl: null,
            usuario: JSON.parse(localStorage.getItem('usuario'))
        }
    }

    componentDidMount(){}
    
    handleMenu = event => { this.setState({ anchorEl: event.currentTarget, open: !this.state.open }) }
    
    handleClose = () => { this.setState({ anchorEl: null, open: false }) };

    handleCloseExit = () => { 
        this.setState({ anchorEl: null, open: false });
        localStorage.removeItem('usuario');
        this.props.history.push('/');
    }

    sideListEstudiante(){
        return(
            <div
            style={{width: 250}}
            role="presentation"
            onClick={() => this.setState({left: false})}
            onKeyDown={() => this.setState({left: false})}>
                <Grid container>
                    <Avatar 
                    style={{
                        margin: 10,
                        width: 60,
                        height: 60,
                    }}
                    alt="Usuario" 
                    src={require('../images/man.png')}/>
                    <Grid style={{marginTop: 20}}>
                        <Typography variant="h5" style={{flexGrow: 1, fontWeight:'bold', color: '#50555a'}}>
                        </Typography>
                        <Typography variant="subtitle2" style={{flexGrow: 1, color: '#50555a'}}>
                        <ListItemText primary="usuario"/> 
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>              
                <List>
                <ListItem button>
                        <ListItemIcon><LocalAtm style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Banderazo">
                            <ListItemText primary="Banderazo" />
                        </Link>
                    </ListItem>   
                <ListItem button>
                        <ListItemIcon><CheckBox style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Calificaciones">
                            <ListItemText primary="Calificaciones" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><Person style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Clientes">
                            <ListItemText primary="Clientes" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><DirectionsCar style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Conductores">
                            <ListItemText primary="Conductores" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MonetizationOnIcon style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Contabilidad">
                            <ListItemText primary="Contabilidad" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AttachMoney style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Precio">
                            <ListItemText primary="Nuevas Tarifa" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><StoreIcon style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Servicios">
                            <ListItemText primary="Servicios" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><BusinessCenter style={{color: '#50555a'}}/></ListItemIcon>
                        <Link to="/views/Control">
                            <ListItemText primary="Administrador de Perfiles" />
                        </Link>
                    </ListItem>
                </List>    
            </div>
        );
    }

    render(){
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <IconButton onClick={()=> this.setState({left: true})} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon style={{color: '#3f51b5'}}/>
                    </IconButton>
                    <Typography variant="h5" style={{flexGrow: 1, fontWeight:'bold', color:'#3f51b5'}}>
                        SeresApp
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={($event) => this.handleMenu($event)}
                            color="inherit">
                            <AccountCircle style={{color: '#3f51b5'}}/>
                            <Menu
                            style={{padding: 15}}
                            id="menu-appbar"
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onClose={($event) => this.handleClose($event)}>
                                <MenuItem onClick={($event) => this.handleClose($event)}>
                                    <ListItemIcon><AccountCircle/></ListItemIcon>
                                    <ListItemText primary="Perfil"/>
                                </MenuItem>
                                <MenuItem onClick={($event) => this.handleCloseExit($event)}>
                                    <ListItemIcon><ExitToApp/></ListItemIcon>
                                    <ListItemText primary="Salir"/>
                                </MenuItem>
                            </Menu>
                        </IconButton>
                    </div>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={() => this.setState({left: false})}
                    onOpen={() => this.setState({left: false})}>
                    { this.sideListEstudiante('left') }
                </SwipeableDrawer>
            </div>
        );
    }
}
export default Header;            