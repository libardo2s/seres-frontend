import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import domain from '../Domain';
import Modal from 'react-bootstrap/Modal';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Comment from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';




class Servicios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false,
      servicio: [],
      servicio_seleccionado: null
    }
  }

  componentDidMount() {
    this.obtenerservicio();
  }

  obtenerservicio(){
    fetch(domain.url + '/api/service/', {
      method: 'GET'
      })
      .then((response) => response.json())
      .then(data => {
        if (data.isOk){

          this.setState({servicio: data.content});
          console.log(this.state.servicio)
        }
      })
      .catch(error => { console.log(error); });
  }

  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Modal onHide={()=> this.setState({show:false})} show={this.state.show} size="xl"> 
          <Modal.Header closeButton >
             <Modal.Title >Detalles</Modal.Title></Modal.Header>
               <Container>
                    <Grid container spacing={3}>
                      <Grid item xs={12} >
                        {
                          this.state.servicio_seleccionado != null ?
                            <div>
                              <p><b>Origen:</b> {this.state.servicio_seleccionado.origin_name}</p>
                              <p><b>Destino:</b> {this.state.servicio_seleccionado.destiny_name}</p>
                              <p><b>Tipo de Servicio:</b> {this.state.servicio_seleccionado.type_service}</p>
                              <p><b>Nombre del Solicitante:</b> {this.state.servicio_seleccionado.client.user.first_name}</p>
                              <p><b>Apellidos del Solicitante:</b> {this.state.servicio_seleccionado.client.user.last_name}</p>

                              { this.state.servicio_seleccionado.driver !== null? 
                              <div>
                              <p><b>Nombre del Conductor:</b> {this.state.servicio_seleccionado.driver.user.first_name}</p>
                              <p><b>Apellidos del Conductor:</b> {this.state.servicio_seleccionado.driver.user.last_name}</p>
                              <p><b>Placa de taxi:</b> {this.state.servicio_seleccionado.driver.license_plate.toUpperCase()}</p>
                              </div>                              

                              :
                              null
                             }
                              <p><b>Descripcion:</b> {this.state.servicio_seleccionado.description}</p>
                              <p><b>Distancia:</b> {this.state.servicio_seleccionado.distance} Km</p>
                              <p><b>Valor:</b> {this.state.servicio_seleccionado.value} Pesos</p>
                              <p><b>Estado del Servicio:</b> {this.state.servicio_seleccionado.state}</p>
                              <p><b>Motivo de Cancelacion:</b> {this.state.servicio_seleccionado.cancel_reason}</p>
                              <p><b>Tiempo de Recorrido:</b> {this.state.servicio_seleccionado.time} Minutos</p>
                              <p><b>Hora del Servicio:</b> {this.state.servicio_seleccionado.date}</p>
                            </div>
                          :
                            null
                        }
                            
                      </Grid>
                    </Grid>
                </Container>
        </Modal>
        <Header history={this.props.history}/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>Servicios</Typography>
        <Grid container>
            <Grid item xs={12}>
             <Paper>
                 <Table style={{width: '95%'}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Origen </TableCell>
                      <TableCell>Destino </TableCell>
                      <TableCell>Tipo de Servicios</TableCell>
                      <TableCell>Nombre del Solicitante</TableCell>
                      <TableCell>Conductor</TableCell>
                      <TableCell>Placa taxi</TableCell>
                      <TableCell>Descripcion </TableCell>
                      <TableCell>Detalles </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.servicio.map(row => (
                      <TableRow key={row.id}>
                        <TableCell scope="row">{row.origin_name}</TableCell>
                        <TableCell scope="row">{row.destiny_name}</TableCell>
                        <TableCell scope="row">{row.type_service}</TableCell>
                        <TableCell scope="row">{row.client.user.first_name} {row.client.user.last_name}</TableCell>
                        <TableCell scope="row">{
                            row.driver !== null?
                            row.driver.user.first_name+' '+row.driver.user.last_name 

                            :
                            "No Asignado"
                        }</TableCell>
                        <TableCell scope="row">{
                          row.driver !== null?
                          row.driver.license_plate.toUpperCase()

                          :
                          "no asignado"
                        }</TableCell>
                        <TableCell scope="row">{row.description}</TableCell>
                        <TableCell align="right"><Button className={row.button} onClick={()=> this.setState({show:true, servicio_seleccionado:row})}><ListItem button>
                        <ListItemIcon><Comment style={{color: '#50555a'}}/></ListItemIcon>
                        </ListItem>  </Button> </TableCell>
                      </TableRow>
                    ))} 
                   </TableBody> 
                  </Table>
              </Paper> 
            </Grid>
          </Grid>  
      </div>
    );
  }
}export default Servicios;