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
import Modal from 'react-bootstrap/Modal';
import TableBody from '@material-ui/core/TableBody';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ControlPoint from '@material-ui/icons/ControlPoint';
import domain from '../Domain';
import Moment from 'react-moment';
import TextField from '@material-ui/core/TextField';


class Banderazo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: JSON.parse(localStorage.getItem('usuario')),
            informacion: '',
            main_loading: false,
            show: false,
            precios: [],
            kilometros: [],
            button: 1,
            valor: '',
            totalkilometro: ''
        }
    }

    componentDidMount() {
        this.obtenerBanderazo();
    }

    obtenerBanderazo() {
        fetch(domain.url + '/api/flag/price/', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                if (data.isOk) {
                    this.setState({ precios: data.content });
                    console.log(this.state.precios)
                }
            })
            .catch(error => { console.log(error); });
    }

    actualizarBanderazo() {
        fetch(domain.url + '/api/flag/price/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                precio: this.state.valor,
                kilometros: this.state.totalkilometro,

            })
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                if (data.isOk) {
                    this.setState({ show: false });
                }
            })
            .catch(error => { console.log(error); });
    }

    render() {
        return (
            <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
                <Modal
                onHide={() => this.setState({ show: false })} 
                show={this.state.show}>
                    <Modal.Body>
                        <div className="form-group">
                            <TextField
                            type="number"
                            id="precio"
                            label="aqui van el Precio del Banderazo"
                            className="form-control"
                            value={this.state.valor}
                            onChange={value => this.setState({ valor: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            type="number"
                            id="Kilometros"
                            label="kilometros del Banderazo"
                            className="form-control"
                            value={this.state.totalkilometro}
                            onChange={value => this.setState({ totalkilometro: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.actualizarBanderazo()} variant="contained" color="primary">Guardar</Button>
                    </Modal.Footer>
                </Modal>
                <Header history={this.props.history} />
                <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>Historial de Banderazo</Typography>
                <Container>
                    <Button onClick={() => this.setState({ show: true })} color="primary" type="submit" variant="contained"
                        style={{ margin: 10, width: '35%' }}><ListItemIcon><ControlPoint style={{ color: 'white' }} /></ListItemIcon>
                        AGREGAR NUEVO BANDERAZO
               </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper>
                                <Table style={{ width: '90%' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Precio de Banderazo             </TableCell>
                                            <TableCell>Fecha de cambio de Banderazo    </TableCell>
                                            <TableCell>Kilometros del nuevo Banderazo  </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.precios.map(row => (
                                            <TableRow key={row.id}>
                                                 <TableCell>
                                                    <Moment format="YYYY/MM/DD">{row.last_update}</Moment>
                                                </TableCell>
                                                <TableCell>{row.base}</TableCell>
                                                <TableCell>{row.count_after}</TableCell>
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

export default Banderazo;