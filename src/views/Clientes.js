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
import domain from '../Domain';
import Switch from '@material-ui/core/Switch';

class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false,
      usuarios: [],
      checkedA: true,
      checkedB: true,
    };
  }
     componentDidMount() {
      this.obtenerUsuarios();
     }

    obtenerUsuarios() {
      fetch(domain.url + '/api/users/', {
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
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, marginBottom: 20}}>Clientes</Typography>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '90%'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombres </TableCell>
                      <TableCell align="right">Apellidos </TableCell>
                      <TableCell align="right">Telefono </TableCell>
                      <TableCell align="right">Fecha de Nacimiento </TableCell>
                      <TableCell align="right">Correo Eletronico </TableCell>
                      <TableCell align="right">Estado </TableCell>
                      <TableCell align="right">Acciones </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.usuarios.map(row => (
                      <TableRow key={row.id}>
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
                        <TableCell scope="row">{row.phone}</TableCell>
                        <TableCell scope="row">{row.birth_date}</TableCell>
                        <TableCell scope="row">{row.user.email}</TableCell>
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
export default Clientes;