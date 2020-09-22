import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  
class Estadistica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      main_loading: false
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header history={this.props.history}/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>
                Estadistica
              </Typography>
              <Paper>
      <Table style={{width: '90%'}}>
        <TableHead>
          <TableRow>
            <TableCell>Detalle </TableCell>
            <TableCell align="right">Ventas Diarias </TableCell>
            <TableCell align="right">Clientes registrados </TableCell>
            <TableCell align="right">Servicios Solicitados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
        </TableBody>
      </Table>
    </Paper>
      </div>
    );
  }
}

export default Estadistica;