import React from 'react';


class Logear extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usuarioid: this.props.usuarioid
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.usuarioid}</h1>
            </div>
        );
    }
}

export default Logear;