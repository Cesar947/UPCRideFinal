import React from 'react';
import PostForm from './PostForm';
import { LISTAR_USUARIO } from '../../actions/actionTypes';
import { fetchUsuario } from '../../actions/userActions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import './Viaje.css';

class Posteo extends React.Component{
    constructor(props){
        super(props);
        let posted = false;
        this.state={
            listausuarios:[],
            userid: this.props.match.params.userid,
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
        this.props.fetchUsuario(this.state.userid);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.actionType === LISTAR_USUARIO) {
            this.setState({ listausuarios: nextProps.listausuarios });
        }
    }

    render(){
        if (this.state.posted) {
            return <Redirect to={"/home/user/" + this.state.userid }/>
        }
        return(
           <div>
                <img src={process.env.PUBLIC_URL + '/resources/card.jpg'} className="Fondo" alt="logo" />
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