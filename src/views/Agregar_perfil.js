import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ControlPoint from '@material-ui/icons/ControlPoint';
import Modal from 'react-bootstrap/Modal';
import TableBody from '@material-ui/core/TableBody';
import TextField from '@material-ui/core/TextField';

class Agregar_perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          usuario: JSON.parse(localStorage.getItem('usuario')),
          informacion: '',
          main_loading: false,
          show: false,
          usuarios:[],
          button: 1
        }
      }
      componentDidMount() {
      }
    
      render() {
        return (
          <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
              <Modal 
              onHide={()=> this.setState({show:false})}
              show={this.state.show}>
                 <Modal.Header closeButton>
                  <Modal.Title >Nuevo Perfiles</Modal.Title>
                    </Modal.Header>
                   <Modal.Body>
                   <div className="form-group">
                            <TextField
                            id="Ciudad"
                            label="Ciudad"
                            className="form-control"
                            //value={this.state.valor}
                            //onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                   <div className="form-group">
                            <TextField
                            id="Nombre"
                            label="Nombre"
                            className="form-control"
                            //value={this.state.valor}
                            //onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            id="Apellidos"
                            label="Apellidos"
                            className="form-control"
                            //value={this.state.valor}
                            //onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            id="Telefono"
                            label="Telefono"
                            className="form-control"
                            //value={this.state.valor}
                            //onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            id="Correo_eletronico"
                            label="Correo Eletroni"
                            className="form-control"
                            //value={this.state.valor}
                            //onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                   </Modal.Body>
                   <Modal.Footer>
                      <Button onClick={()=> this.setState({show:false})}  variant="contained" color="primary">Guardar</Button>
                    </Modal.Footer>
               </Modal>
            <Header history={this.props.history}/>
            <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>Agragar Perfiles</Typography>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper>
                   <Table style={{width: '90%'}}>
                       <TableHead>
                            <TableRow>
                                   <TableCell>Ciudad </TableCell>
                                   <TableCell align="right">Nombre</TableCell>
                                    <TableCell align="right">Apellidos</TableCell>
                                    <TableCell align="right">Telefono</TableCell>
                                    <TableCell align="right">Correo Eletronico</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.usuarios.map(row => (
                      <TableRow key={row.id}>
                         <TableCell scope="row">{row}</TableCell>
                       </TableRow>
                    ))}
                        </TableBody>
                    </Table>
                 </Paper>
               </Grid>
               </Grid>
             </Container>
             <div className="row h-100 justify-content-center align-items-center">
                       <Button onClick={()=> this.setState({show:true})}
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ margin: 10, width: '35%' }}><ListItemIcon><ControlPoint style={{color: 'white'}}/></ListItemIcon>
                            AGREGAR
                       </Button>
                   </div>
         </div>  
        );
      }  
    }
    export default Agregar_perfil;


