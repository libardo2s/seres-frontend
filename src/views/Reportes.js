import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const rep = [
  {
      "counter_name": "dsd",
      "counter_type": "sds"
  },
  {
      "counter_name": "gdg",
      "counter_type": "dfd"
  },
  {
      "counter_name": "sdsData",
      "counter_type": "sds"
  },
  {
      "counter_name": "Stoc final",
      "counter_type": "number    "
  },
  {
      "counter_name": "Consum GPL",
      "counter_type": "number    "
  },
  {
      "counter_name": "sdg",
      "counter_type": "dfg"
  },
  {
      "counter_name": "dfgd",
      "counter_type": "fgf"
  },
  {
      "counter_name": "fgd",
      "counter_type": "dfg"
  },
  {
      "counter_name": "dfg",
      "counter_type": "dfg"
  },
  {
      "counter_name": "gd",
      "counter_type": "dfg"
  }

  ]


class Reportes extends React.Component {
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
                Reportes
              </Typography>
              <Paper>
      <Table style={{width: '90%'}}>
        <TableHead>
          <TableRow>
            <TableCell>Detalle </TableCell>
            <TableCell align="right">Numero de Usuario Registrados </TableCell>
            <TableCell align="right">Solicitud de Servicios </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rep.map(row => (
            <TableRow key={row.counter_name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.counter_name}</TableCell>
              <TableCell align="right">{row.counter_type}</TableCell>
              <TableCell align="right">{row.counter_unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </div>
    );
  }
}

export default Reportes;