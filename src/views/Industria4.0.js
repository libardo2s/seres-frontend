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
import video from '../videos/VIDEOSTEMM.mp4';
import Button from '@material-ui/core/Button';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';

const preguntas =[
  {
    pregunta: 'En qué año da inicio la primera revolución industrial',
    opcion_1: '1786 ',
    opcion_2: '1784 ',
    opcion_3: '1860 ',
    respuesta: '1784 '
  }, 
  {
    pregunta: '¿Con qué término se vincula también la tercera revolución industrial? ',
    opcion_1: 'Revolución de la expansión ',
    opcion_2: 'Sociedad industrial ',
    opcion_3: 'Sociedad de la información ',
    respuesta: 'Sociedad de la información '
  },
  {
    pregunta: 'La nueva revolución que combina técnicas avanzadas de producción y operaciones con tecnologías inteligentes que se integrarán …',
    opcion_1: 'personas, sistemas y industria ',
    opcion_2: 'plantas, industria y sistemas ',
    opcion_3: 'organizaciones, las personas y los activos ',
    respuesta: 'organizaciones, las personas y los activos '
  },
  {
    pregunta: '¿Cuál de las siguientes opciones NO fue una idea de comunicación en la revolución 4.0?',
    opcion_1: 'Maquina a vapor  ',
    opcion_2: 'Internet de las cosas  ',
    opcion_3: 'Inteligencia artificial ',
    respuesta: 'Maquina a vapor '
  }
]



class Industria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      cambio: 0,
    };

    this.videoRef = React.createRef();
    
  }
  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header />
                <video src={video} style={{
                  width: 1080, 
                  height: 400, 
                  display: 'block', 
                  justifycontent: 'center',
                  alignitems: 'center',
                  margin: 'auto',
                  marginTop:10 }}
                   controls ></video> 
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Table style={{width: '90%'}}>
                  <TableHead>    
                    <TableRow>
                      <TableCell>
                      <Typography style={{ AlignItems: 'center'}}
                      ><label for="preguntas">{preguntas[this.state.cambio].pregunta}</label>
                      </Typography>
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
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Button onClick={() => this.setState({cambio: (this.state.cambio - 1 < 0) ? 0 : this.state.cambio - 1})}
                         variant="contained"
                         color= ''
                         type="submit"
                         style={{ position: 'fixed', top: '80%', lest: 50, marginBottom: 10, width: '15%' }}><FastRewind style={{color: '#50555a'}}/>
                            ANTERIOR  
                     </Button>
                         <Button onClick={() => this.setState({cambio: (this.state.cambio + 1 < -1) ? 0 : this.state.cambio + 1})}
                                 variant="contained"
                                 color= ''
                                 type="submit"
                                 style={{ position: 'fixed', top: '80%', right: 50, marginBottom: 10, width: '15%' }}>
                                  SIGUENTE
                            <FastForward style={{color: '#50555a'}}/></Button>
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
export default Industria;