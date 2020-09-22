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
import domain from '../Domain';

class Contabilidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false,
      servicio: [],
      total: 0

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
          let data_filter = data.content.filter(s => s.state==="Servicio terminado"); 
          let total = this.state.total;
          for(let ser of data_filter){
            total += ser.value;
          }
          this.setState({servicio: data_filter, total});
        }
      })
      .catch(error => { console.log(error); });
  }


  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header history={this.props.history}/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>Contabilidad</Typography>
        <Typography variant="h3" style={{ textAlign: 'right', marginTop: 25, width: '80%' }}>{this.state.total}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={11}>
               <Paper>
                  <Table style={{width: '95%'}}>
                     <TableHead>
                       <TableRow>
                         <TableCell>Nombre del Conductor  </TableCell>
                         <TableCell align="right">Placa del Taxi</TableCell>
                         <TableCell align="right">Tipo de Servicio</TableCell>
                         <TableCell align="right">Total Transaciones </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                       {this.state.servicio.map(row => (
                        <TableRow key={row.id}>
                           <TableCell scope="row">{
                          row.driver?
                           row.driver.user.first_name
                          :
                          "No Asignado"
                        }</TableCell>
                        <TableCell scope="row">{row.driver.license_plate.toUpperCase()}</TableCell>
                        <TableCell scope="row">{row.type_service}</TableCell>
                              <TableCell scope="row">{row.value}</TableCell>
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
}

export default Contabilidad;