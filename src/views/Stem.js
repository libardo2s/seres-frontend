import React from 'react';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import Button from '@material-ui/core/Button';
import vid1 from '../stem/STEM Parte 1.mp4';
import vid2 from '../stem/STEM Parte 2.mp4';
import vid3 from '../stem/STEM Parte 3.mp4';
import vid4 from '../stem/STEM Parte 4.mp4';
import vid5 from '../stem/STEM Parte 5.mp4';
import vid6 from '../stem/STEM Parte 6.mp4';
import vid7 from '../stem/STEM Parte 7.mp4';
import Modal from 'react-bootstrap/Modal';
import preguntas from '../preguntasstem';
import { useState, useEffect } from 'react';

const videos = [vid1,vid2,vid3,vid4,vid5,vid6,vid7,]


class Stem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: JSON.parse(localStorage.getItem('usuario')),
      main_loading: false,
      videos: 0,
      cambio: 0,
    }

    
  }
  render() {
    return (
      <div className="login-container" style={{ backgroundColor: '#48d1cc' }}>
         <Modal>
                    <Modal.Body>
                    <div className='lado-izquierdo'>
                        <div className='numero-pregunta'>
                          <span> pregunta 1 de 3 </span> 3
                        </div>
                        <div className='titulo-preguntas'>como te llamas</div>
                      </div>
                      <div className='lado-derecho'>
                        
                      </div>
                    </Modal.Body>
                    <Modal.Footer>       
                    </Modal.Footer>
                </Modal>
        <Header/>
        <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25, color: '#f5f5f5' }}>S.T.E.M</Typography>
        <video src={videos[this.state.cambio]}  alt= 'logo' style={{
                  width: 1080, 
                  height: 400, 
                  display: 'block', 
                  justifycontent: 'center',
                  alignitems: 'center',
                  margin: 'auto',
                  marginTop:10 }}
                   controls autoPlay></video> 

          <Grid container spacing={3}>
            <Grid item xs={11}>
               <Paper>
                  <Table style={{width: '95%'}}>
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
                     <TableHead>
                       <TableRow>
                       <div className='lado-izquierdo'>
                        <div className='numero-pregunta'>
                          <span> pregunta 1 de</span> 3 
                        </div>
                        <div className='titulo-preguntas'>como te llamas</div>
                      </div>
                      <div className='lado-derecho'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        
                      </div>
                        </TableRow>
                      </TableHead>
                    </Table>
                </Paper>
              </Grid>
            </Grid>
      </div>
    );
  }
}

export default Stem;