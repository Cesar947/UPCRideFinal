import React from 'react';
import { PUBLICAR_VIAJE } from '../../actions/actionTypes';
import { publicarViaje } from '../../actions/viajesActions';
import TextField from '@material-ui/core/Button';
import './Form.css';


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            conductor: '',
            descripcion: '',//llenar
            puntoPartida: '',//llenar
            puntoDestino: '',//llenar
            destinoLatitud: '',
            destintoLongitud: '',
            partidaLatitud: '',
            partidaLongitud: '',
            horaPartida: '',//llenar
            horaLlegada: '',//llenar
            entrada_salida: '',//llenar
            fecha: '',//llenar
            dia: '',//llenar
            estado: '',
            visualizacionHabilitada: '',
            numeroPasajeros: '',
            limitePasajeros: ''
        }
    }
    /*handleChange(event){
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        this.setState({...this.state, [fieldName]: fieldValue});
    }*/
    handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };


    handleSubmit() {
        this.props.publicarViaje(this.state);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.actionType === PUBLICAR_VIAJE){
           this.props.afterSubmit();
        }
    }

    render(){
      return(  
        <form className="container" noValidate autoComplete="off">
       <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Name"
        className="textField"
        value=""
        onChange={this.handleChange('name')}
        margin="normal"
      />
      <TextField
        id="standard-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        className="textField"
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        className="textField"
        margin="normal"
      />
      <TextField
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        className="textField"
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        className="textField"
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className="textField"
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="standard-dense"
        label="Dense"
        className="textField"
        margin="dense"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value=""
        onChange={this.handleChange('multiline')}
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className="textField"
        helperText="Some important text"
        margin="normal"
      />
     
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Number"
        value={values.age}
        onChange={this.handleChange('age')}
        type="number"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className="textField"
        margin="normal"
      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        className="textField"
        value=""
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        XD
      </TextField>
     
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Descripción"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-bare"
        className="textField"
        defaultValue="Bare"
        margin="normal"
        inputProps={{ 'aria-label': 'bare' }}
      />
    </form>)
    }

}

export default PostForm;