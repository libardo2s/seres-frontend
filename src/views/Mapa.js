import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';
import Geocode from "react-geocode";
import domain from '../Domain';

const base = {
  apiKey: "AIzaSyBerKwLvnr_TuuZlksgvgWpZwcVsqr1rN0",
  authDomain: "fire-seresapp.firebaseapp.com",
  databaseURL: "https://fire-seresapp.firebaseio.com",
  projectId: "fire-seresapp",
  storageBucket: "fire-seresapp.appspot.com",
  messagingSenderId: "37427641337",
  appId: "1:37427641337:web:19d8079f1b496d28bfdb28",
  measurementId: "G-KTDH1W1MVJ"
};

firebase.initializeApp(base);
Geocode.setApiKey("AIzaSyBerKwLvnr_TuuZlksgvgWpZwcVsqr1rN0");
Geocode.setRegion("es");
Geocode.enableDebug();


class Mapa extends Component {
  constructor(props) {
    super(props);
    this.data_base_ref = firebase.firestore().collection(`postMap`);
    this.suscriber_firebase = null;
    this.state = {
      postMap: [],
      usuario: JSON.parse(localStorage.getItem('usuario')),
      informacion: '',
      usuarios: ``,
      origen: ``,
      destino: ``,
      numero_pasajero: ``,
      descripcion: ``,
      main_loading: false,
      latitud_origen: ``,
      longitud_origen: ``,
      latitud_destino: ``,
      longitud_destino: ``,
      conductor: ``
    }
  }
  servico_admin(){
    fetch(domain.url + '/api/service/driver/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: 427,
        conductor: this.state.conductor.placa,
        origen: this.state.origen,
        origin_lat: this.state.latitud_origen,
        origin_lan: this.state.longitud_origen,
        destino: this.state.destino,
        destiny_lat: this.state.latitud_destino,
        destiny_lan: this.state.longitud_destino,
        tipo_servicio: "normal",
        discapacidad: false,
        carga: false,
        mascota: false,
        pasajeros: this.state.numero_pasajero,
        descripcion: `Preguntar por ${this.state.usuarios}. ${this.state.descripcion}`
      })
    }).then(
      response => { this.setState({ 
        show: false,
        origen: "",
        destino: "",
        usuarios: "",
        descripcion: "",
        numero_pasajero: "" 
  })},
      error => {
        console.error(error);
      });

  }


  ubicacion_origen(direccion) {
  Geocode.fromAddress(direccion).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({latitud_origen: lat})
      this.setState({longitud_origen: lng})
    },
    error => {
      console.error(error);
    }
    );
  }
  ubicacion_destino(direccion) {
    Geocode.fromAddress(direccion).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({latitud_destino: lat})
      this.setState({longitud_destino: lng})
      },
      error => {
        console.error(error);
      }
      );
    }

  componentDidMount() {
    this.suscriber_firebase = this.data_base_ref.onSnapshot(
      this.onCollectionUpdate,
    );
  }
  componentWillUnmount() {
    this.suscriber_firebase();
  }
  onCollectionUpdate = querySnapshot =>{
    if (!querySnapshot.empaty){
      let postMap = [];
      querySnapshot.forEach(snap =>{
        const data = {...snap.data(), _id: snap.id};
        postMap.push(data);
     });
     this.setState({postMap});
     console.log(this.state.postMap);
    }
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
                            label="NOMBRE USUARIO"
                            className="form-control"
                            value={this.state.usuarios}
                            onChange={value => this.setState({ usuarios: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            label="ORIGEN DE LA CARRERA"
                            className="form-control"
                            value={this.state.origen}
                            onChange={value => {
                              this.setState({origen: value.target.value })
                              this.ubicacion_origen(value.target.value)}
                            }
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            label="DESTINO DE LA CARRERA"
                            className="form-control"
                            value={this.state.destino}
                            onChange={value => {
                              this.setState({ destino: value.target.value })
                              this.ubicacion_destino(value.target.value)}
                            }
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            type="number"
                            label="NUMERO DE PASAJERO"
                            className="form-control"
                            value={this.state.numero_pasajero}
                            onChange={value => this.setState({ numero_pasajero: value.target.value })}
                            required
                            margin="normal" />
                        </div>
                        <div className="form-group">
                            <TextField
                            label="DESCRIPCION"
                            className="form-control"
                            value={this.state.descripcion}
                            onChange={value => this.setState({ descripcion: value.target.value })}
                            margin="normal" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.servico_admin()} variant="contained" color="primary">Asignar Carrera</Button>
                    </Modal.Footer>
                </Modal>
        <Header history={this.props.history}/>
        <Map google={this.props.google}
          initialCenter={{lat: 10.474639,lng: -73.2616842 }}
          zoom={15}>
          {this.state.postMap.map(item => (
             <Marker key={item.placa}
             ico
             position={{ lat: item.location.latitud, lng: item.location.longitud}}
             title={`${item.nombre} ${item.apellido} ${item.placa}`}
             onClick={() => this.setState({ show: true, conductor: item })}  
             icon={item.estado === "Disponible" ? require('../images/taxii.png'): require('../images/taxi1.1.png')}    
             />         
             ))
          }
        </Map>    
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBerKwLvnr_TuuZlksgvgWpZwcVsqr1rN0")
})(Mapa)