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
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import semana_2 from '../imagen/Semana2.png';
import semana_3 from '../imagen/Semana3.png'

const IMAGES = [semana_2, semana_3]

class Motivacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: JSON.parse(localStorage.getItem('usuario')),
            main_loading: false,
            show: false,
            button: 1,
            cambio: 0,
        }
    }

    render() {
        return (
            <div className="login-container" style={{ backgroundColor: '#f0ffff' }}>
                <Modal>
                    <Modal.Body>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                <Header />
                <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#ffb6c1'}}>MOTIVACION</Typography>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper>
                                <Table style={{ width: '100%'}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                            <Typography style={{ AlignItems: 'center'}}>Experiencias de nuestros companeros
                                                </Typography>
                                             </TableCell> 
                                        </TableRow>
                                    </TableHead>
                                    </Table>
                                                <Button onClick={() => this.setState({cambio: this.state.cambio - 1})}
                                                variant="contained"
                                                color= ''
                                                type="submit"
                                                style={{ position: 'fixed', top: '80%', lest: 50, marginBottom: 10, width: '15%' }}><FastRewind style={{color: '#50555a'}}/>
                                                ANTERIOR  
                                            </Button>
                                                <Button onClick={() => this.setState({cambio: this.state.cambio + 1})}
                                                    variant="contained"
                                                    color= ''
                                                    type="submit"
                                                    style={{ position: 'fixed', top: '80%', right: 50, marginBottom: 10, width: '15%' }}>
                                                    SIGUENTE
                                                    <FastForward style={{color: '#50555a'}}/></Button>
                            </Paper>
                            <img src={IMAGES[this.state.cambio]} alt="Logo" style={{width: 1080, height: 400, display: 'block', justifycontent: 'center',alignitems: 'center',margin: 'auto',marginTop:10}}/>
                                
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Motivacion;