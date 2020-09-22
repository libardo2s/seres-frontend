import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const pag = [
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


class Pago extends React.Component {
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
                Pago
              </Typography>
              <Paper>
      <Table style={{width: '90%'}}>
        <TableHead>
          <TableRow>
            <TableCell>Detalles </TableCell>
            <TableCell align="right">Pagos de Clientes </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pag.map(row => (
            <TableRow key={row.counter_name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.counter_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </div>
    );
  }
}

export default Pago;