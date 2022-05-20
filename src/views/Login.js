import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import SweetAlert from 'sweetalert2-react';
import domain from '../Domain';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario_local: JSON.parse(localStorage.getItem('usuario')),
      usuario: '',
      contrasena: '',
      is_login: true,
      is_register: false,
      validar_contrasena: true,
      show_error: false,
      message_error: ''
    };
  }
  iniciarSesion() {
    console.log('lgin');
    fetch(domain.url + '/api/login-admin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: this.state.usuario,
        contrasena: this.state.contrasena,
      })
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        if (data.isOk) {
          if (data.content.user.is_active) {
            if (data.content.user.is_superuser) {
              this.props.history.push('/dashboard');
            }
          }
        }
      })
      .catch(error => { console.log(error); });
  }

  onlyNumber(value) {
    const regex = /^[0-9\b]+$/;
    if (value === '' || regex.test(value))
      return true;
    else
      return false;
  }

  onlyText(value) {
    const regex = /^[A-Z-a-z\b]+$/;
    if (value === '' || regex.test(value))
      return true;
    else
      return false;
  }

  onlyTextWihSpace(value) {
    const regex = /^[A-Z-a-z_ \b]+$/;
    if (value === '' || regex.test(value))
      return true;
    else
      return false;
  }
  handleSubmitFormLogin = event => {
    event.preventDefault();
    this.iniciarSesion();
  }
  renderElement() {
    if (this.state.is_login) {
      return (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-5 shadow-div" style={{ backgroundColor: '#007ED9', borderRadius: 10 }}>
            </div>
            <Card className="col-5 shadow-div form-container" style={{ backgroundColor: '#ffb6c1', borderRadius: 10 }}>
              <Typography variant="h3" style={{ textAlign: 'center', marginTop: 25 }}>
                Bienvenidos 
              </Typography>
              <Typography variant="h5" style={{ textAlign: 'center', marginBottom: 30 }}>
                S.T.E.M
              </Typography>
              <form style={{ margin: 20, marginBottom: 20 }} className="needs-validation" onSubmit={this.handleSubmitFormLogin}>
                <div className="form-group">
                  <TextField
                    id="usuario"
                    label="Usuario"
                    className="form-control" style={{ backgroundColor: '#ffb6c1', borderRadius: 10 }}
                    value={this.state.usuario}
                    onChange={value => this.setState({ usuario: value.target.value })}
                    required
                    margin="normal" />
                </div>
                <div className="form-group">
                  <TextField
                    type="password"
                    className="form-control" style={{ backgroundColor: '#ffb6c1', borderRadius: 10 }}
                    id="contraseña"
                    placeholder="Contraseña"
                    value={this.state.contrasena}
                    onChange={value => this.setState({ contrasena: value.target.value })}  /*ojo con la ñ*/
                    required
                    margin="normal" />
                </div>
                <div className="row h-100 justify-content-center align-items-center">
                  <Button
                    variant="contained"
                    color= ''
                    type="submit"
                    style={{ marginBottom: 10, width: '95%' }}>
                    INGRESAR
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          <SweetAlert
           type='error'
            show={this.state.show_error}
            title={this.state.message_error}
            onConfirm={() => this.setState({ show_error: false })} />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="login-container">
        {this.renderElement()}
      </div>
    );
  }
}

export default Login;