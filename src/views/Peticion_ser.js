import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const pet = [
  {
      "counter_name": "",
      "counter_type": "sds",
      "counter_unit": "sds",
      
  },
  {
      "counter_name": "gdg",
      "counter_type": "dfd",
      "counter_unit": "ds"
  },
  {
      "counter_name": "sdsData",
      "counter_type": "sds",
      "counter_unit": "   dd       "
  },
  {
      "counter_name": "Stoc final",
      "counter_type": "number    ",
      "counter_unit": "litri     "
  },
  {
      "counter_name": "Consum GPL",
      "counter_type": "number    ",
      "counter_unit": "litri     "
  },
  {
      "counter_name": "sdg",
      "counter_type": "dfg",
      "counter_unit": "gfgd"
  },
  {
      "counter_name": "dfgd",
      "counter_type": "fgf",
      "counter_unit": "liggtggggri     "
  },
  {
      "counter_name": "fgd",
      "counter_type": "dfg",
      "counter_unit": "kwfgf       "
  },
  {
      "counter_name": "dfg",
      "counter_type": "dfg",
      "counter_unit": "dg"
  },
  {
      "counter_name": "gd",
      "counter_type": "dfg",
      "counter_unit": "dfg"
  }

  ]

class Peticion_ser extends React.Component {
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
                Peticion de Servicios
              </Typography>
           
       <Paper>
      <Table style={{width: '90%'}}>
        <TableHead>
          <TableRow>
            <TableCell>Peticion </TableCell>
            <TableCell align="right">Servicios Pasados </TableCell>
            <TableCell align="right">Servicios ocurriendo </TableCell>
            <TableCell align="right">Servicios Programados </TableCell>
            <TableCell align="right">Detalles de Peticion </TableCell>
            <TableCell align="right">Detalles del Cliente </TableCell>
            <TableCell align="right">Detalles de Conductores </TableCell>
            <TableCell align="right">Detalles de Servicios </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pet.map(row => (
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

export default Peticion_ser;