import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Badge from '@material-ui/core/Badge';
import Switch from '@material-ui/core/Switch';
import domain from '../Domain';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ControlPoint from '@material-ui/icons/ControlPoint';
import { Link } from "react-router-dom";
class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false,
      usuarios: [],
      checkedA: true,
      checkedB: true,
      }
    }
  

  componentDidMount() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    fetch(domain.url + '', {
    method: 'GET'
    })
    .then((response) => response.json())
    .then(data => {
      if (data.isOk){
        let tip=data.content.filter(t=> t.is_driver===false);
        this.setState({usuarios: tip});
        console.log(this.state.usuarios)
      }
    })
    .catch(error => { console.log(error); });
} 
     handleChange(checked) {
     this.setState({ checked });  
     }
     funactiva(id){
      fetch(domain.url +'/api/users/'+id+'/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          actualizacion: '2',
        })
      })
      .then((response) => response.json())
      .then(data => {
        if (data.isOk){
          let usuarios = this.state.usuarios;
          let index = usuarios.findIndex(u=> u.id === id);
          usuarios[index] = data.content;
          this.setState({usuarios});
        }
      })
      .catch(error => { console.log(error); });
    }
    render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header history={this.props.history}/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>Administrador de Perfiles</Typography>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
              <div style={{justifyContent: 'center', alignItems: 'center'}}> 
              <Link to="/views/Agregar_perfil">
               <Button onClick={()=> this.setState({show:true})}                     
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ margin: 10, width: '35%' }}><ListItemIcon><ControlPoint style={{color: 'white'}}/></ListItemIcon>
                    AGREGAR PERFIL
                  </Button>
                  </Link>
          </div>
               <Table style={{width: '90%'}}>
                 <TableHead>
                   <TableRow>
                     <TableCell>Ciudad </TableCell>
                          <TableCell align="right">Nombre </TableCell>
                          <TableCell align="right">Apellidos </TableCell>
                          <TableCell align="right">Telefono </TableCell>
                          <TableCell align="right">Correo Eletronico </TableCell>
                          <TableCell align="right">Estado </TableCell>
                          <TableCell align="right">Acciones </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {this.state.usuarios.map(row => (
                      <TableRow key={row.id}>SUPER USUARIO
                        <TableCell scope="row">{}0</TableCell>
                        <TableCell component="th" scope="row">
                         {
                          row.user.first_name ?
                            row.user.first_name
                          :
                          "Nombre Vacio"
                         }
                       </TableCell>
                       <TableCell scope="row">
                         {
                          row.user.last_name ?
                            row.user.last_name
                          :
                          "Apellidos Vacio"
                          }
                       </TableCell>
                        <TableCell scope="row">{}</TableCell>
                        <TableCell scope="row">{}0</TableCell>
                        <TableCell scope="row">
                        {
                          row.user.is_active ?
                            <Badge badgeContent={'Activo'} color="primary"> </Badge>
                          :
                            <Badge badgeContent={'Inactivo'} color="secondary"> </Badge>
                        }
                        </TableCell>
                        <TableCell scope="row">
                          <Switch 
                           onChange={()=>this.funactiva(row.id)}
                             checked={row.user.is_active} 
                             color="primary"/>
                             </TableCell>
                      </TableRow>
                    ))}
                 </TableBody>
                </Table>
             </Paper>
           </Grid>
           </Grid>
         </Container>
     </div>
      
    );
  }
}
export default Control;