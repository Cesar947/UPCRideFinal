import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Home.css';
import PropTypes from "prop-types";

import { PostButton } from '../Button';
import Table from '@material-ui/core/Table';






class ViajesList extends React.Component {

    static propTypes = {
        trips: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trips) {
            this.setState({ trips: nextProps.trips })
        }
    }



    render() {
        return (
            <div>

                <PostButton> PUBLICAR </PostButton>
              
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Name</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>

               

                    {this.state.trips.map((trip, index) => (
                        <tr key={index}>
                            <td>{trip.descripcion}</td>
                            <td>{trip.puntoPartida}</td>
                            <td>{trip.puntoDestino}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ViajesList;