import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import domain from '../Domain';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import StarRatingComponent from 'react-star-rating-component';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Comment from '@material-ui/icons/Comment';



class Calificaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false,
      show: false,
      usuarios:[],
      rating: 1,
      button: 1,
      comentario: []
    }
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
      console.log(data);
      if (data.isOk){
        let tip=data.content.filter(t=> t.is_driver===true);
        this.setState({usuarios: tip});
        console.log(this.state.usuarios)
      }
    })
    .catch(error => { console.log(error); });
  }

  obtenercomentarioconductor = id => {
    fetch(`${domain.url}/api/comments/driver/${id.toString()}/`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      if (data.isOk){
        this.setState({comentario: data.content, show:true});
      }
   })
   .catch(error => { console.log(error); });
}
  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Modal onHide={()=> this.setState({show:false})} show={this.state.show} size="xl"> 
          <Modal.Header closeButton >
             <Modal.Title >comentarios</Modal.Title></Modal.Header>
               <Container>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper>
                          <Table style={{width: '90%'}}>
                            <TableHead>
                              <TableRow>
                              <TableCell>Nombre                      </TableCell>
                              <TableCell>Apellidos                   </TableCell>
                              <TableCell>Comentarios                 </TableCell>
                              <TableCell>Actitud                     </TableCell>
                              <TableCell>Presentacion Personal       </TableCell>
                              <TableCell>Condiciones del carro       </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.comentario.map(row => (
                                  <TableRow key={row.id}>
                                    <TableCell scope="row">{row.client.user.first_name}</TableCell>
                                    <TableCell scope="row">{row.client.user.last_name}</TableCell>
                                    <TableCell scope="row">{row.comment}</TableCell>
                                    <TableCell align="right">{row.counter_type}
                                      <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={row.score_attitude}/>
                                    </TableCell>
                                    <TableCell align="right">{row.counter_type}
                                       <StarRatingComponent 
                                          name="rate1" 
                                          starCount={5}
                                          value={row.score_personalPresentation}
                                        />
                                      </TableCell>
                                      <TableCell align="right">{row.counter_type}
                                         <StarRatingComponent 
                                           name="rate1" 
                                           starCount={5}
                                           value={row.score_carCondition}
                                          />
                                        </TableCell>
                                  </TableRow> 
                                ))}
                            </TableBody>
                          </Table>
                        </Paper>
                      </Grid>
                    </Grid>
                </Container>
        </Modal>
        <Header history={this.props.history}/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25}}>Calificaciones</Typography>
         <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '90%'}}>
                  <TableHead>
                    <TableRow>
                     <TableCell>Nombre                      </TableCell>
                     <TableCell>Apellidos                   </TableCell>
                     <TableCell>Comentarios                 </TableCell>
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
                         <TableCell align="right">{row.conductor}  <Button className={row.button} onClick={()=> this.obtenercomentarioconductor(row.id)}><ListItem button>
                        <ListItemIcon><Comment style={{color: '#50555a'}}/></ListItemIcon>
                    </ListItem>  </Button> </TableCell>
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

export default Calificaciones;