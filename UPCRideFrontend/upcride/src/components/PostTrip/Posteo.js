import React from 'react';
import PostForm from './PostForm';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import { fetchUsuario } from '../../actions/usuariosActions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Posteo extends React.Component{
    constructor(props){
        super(props);
        let posted = false;
        this.state={
            listausuarios:[],
            posted
        }
        this.post = this.post.bind(this)
    }

    post(){
        this.setState({
            posted: true
        })
    }
    
    componentDidMount() {
        this.props.fetchUsuario();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === LISTAR_USUARIO) {
            this.setState({ listausuarios: nextProps.listausuarios });
        }
    }

    render(){
        if (this.state.posted) {
            return <Redirect to="/home" />
        }
        return(
           <div>
                <img src={process.env.PUBLIC_URL + '../images/card.jpg'} className="Fondo" alt="logo" />
                <PostForm usuarios = {this.state.listausuarios}  post = {this.post}/>
           </div>     
        );
    }
}

const mapState = state => {
    return {
        listausuarios: state.usuario.usuarios,
        actionType: state.usuario.actionType
    }
};

const mapDispatch = { 
     fetchUsuario
};

export default connect(mapState, mapDispatch)(Posteo); 