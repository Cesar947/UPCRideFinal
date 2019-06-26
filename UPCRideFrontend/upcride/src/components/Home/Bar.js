import React from 'react';

class Bar extends React.Component {

    static propTypes = {
        usuarios: PropTypes.array.isRequired
    };

    constructor(props) {
      super(props);
      this.state = {
        usuarios: []
      }
    }
  
    componentWillReceiveProps(nextProps) {
        if (nextProps.usuarios) {
            this.setState({ usuarios: nextProps.usuarios })
        }
    }
  
  
    render() {
      return (
        <AppBar position="relative">
          <Toolbar className="NavBar" >
            <img src={process.env.PUBLIC_URL + 'images/Logo.png'} alt="logo" className="Logo" />
            {this.state.usuarios.map((usuario, index) => (
                <div key={index}> 
                <Typography >
                {usuario.nombres}
                </Typography></div>
            ))}
          </Toolbar>
        </AppBar>
      );
    }
  }

  export default Bar;