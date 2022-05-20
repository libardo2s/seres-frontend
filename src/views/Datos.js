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
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import im1 from '../quecarreraes/1.png';
import im2 from '../quecarreraes/2.png';
import im3 from '../quecarreraes/3.png';
import im4 from '../quecarreraes/4.png';

const IMAGES = [im1,im2,im3,im4]

const preguntas =[
  {
    opcion_1: 'Ingeniería ambiental ',
    opcion_2: 'Ingeniería eléctrica ',
    opcion_3: 'Ingeniería de sistemas ',
    opcion_4: 'Ingeniería civil ',
    respuesta: 'Ingeniería de sistemas '
  }, 
  {
    opcion_1: 'Ingeniería industrial ',
    opcion_2: 'Ingeniería ambiental ',
    opcion_3: 'Ingeniería civil ',
    opcion_4: 'Ingeniería de edificación  ',
    respuesta: 'Ingeniería civil '
  },
  {
    opcion_1: 'Ingeniería ambiental ',
    opcion_2: 'Ingeniería mecánica ',
    opcion_3: 'Ingeniería mecatrónica ',
    opcion_4: 'Ingeniería de telecomunicaciones ',
    respuesta: 'Ingeniería mecánica '
  },
  {

    opcion_1: 'Ingeniería ambiental ',
    opcion_2: 'Ingeniería industrial ',
    opcion_3: 'Ingeniería mecánica ',
    opcion_4: 'Ingeniería mecatrónica ',
    respuesta: 'Ingeniería industrial '
  }
]


class Conductores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      cambio: 0,
    }
    console.log(IMAGES.length)
  }

  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#add8e6' }}>
        <Header/>
        <img src={IMAGES[this.state.cambio]} alt="Logo" 
          style={{width: 400,
                 height: 500,
                  display: 'block',
                   justifycontent: 'center',
                   alignitems: 'center',
                   margin: 'auto',
                   marginTop:10}}/>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '100%'}}>
                  <TableHead>
                  <TableRow>
                  <TableCell>
                    <Typography style={{ AlignItems: 'center'}}>¿Qué carrera es? </Typography>
                    <input
                    onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                    type="radio" id="preguntas"
                    name="preguntas" 
                    value={preguntas[this.state.cambio].opcion_1}/>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_1}</label>
                      <input 
                    onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                    type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_2}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_2}</label>
                      <input
                    onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}}
                     type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_3}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_3}</label>
                      <input
                      onChange={ event => { (event.target.value === preguntas[this.state.cambio].respuesta) ? alert('Respuesta correcta') : alert('Respuesta incorrecta')}} 
                      type="radio" id="preguntas" name="preguntas" value={preguntas[this.state.cambio].opcion_4}></input>
                      <label for="preguntas">{preguntas[this.state.cambio].opcion_4}</label>
                    </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  </TableBody>
                     <Button onClick={() => this.setState({cambio: (this.state.cambio - 1 < 0) ? 0 : this.state.cambio - 1})}
                              variant="contained"
                              color= ''
                              type="submit"
                              style={{ position: 'fixed', top: '80%', lest: 50, marginBottom: 10, width: '15%' }}>
                      <FastRewind style={{color: '#50555a'}}/>
                              ANTERIOR  
                      </Button>
                      <Button onClick={() => this.setState({cambio: (this.state.cambio + 1 > IMAGES.length - 1) ? IMAGES.length - 1 : this.state.cambio + 1})}    
                            variant="contained"
                            color= ''
                            type="submit"
                            style={{ position: 'fixed', top: '80%', right: 50, marginBottom: 10, width: '15%' }}>
                            SIGUENTE
                      <FastForward style={{color: '#50555a'}}/></Button>
                </Table>
              </Paper>      
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Conductores;

