import React from 'react';
import Header from '../components/Header';

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
      <div className="login-container" style={{ backgroundColor: '#ffffff' }}>
        <Header history={this.props.history}/>
      </div>
    );
  }
}

export default Main;