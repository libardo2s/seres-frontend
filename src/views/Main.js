import React from 'react';
import Header from '../components/Header';
import "../global.css";

class Main extends React.Component {
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
      <div className="login-container" style={{ backgroundColor: '#ffb6c1' }}>
        <Header history={this.props.history}/>
      </div>
    );
  }
}

export default Main;