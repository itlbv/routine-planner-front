import React, {Component} from 'react';
import classes from './Routines.module.css';
import RoutinesTable from './RoutinesTable/RoutinesTable';
import axios from '../axios';

class Routines extends Component {

    state = {
        routines: null
    };

    componentDidMount() {
        axios.get('/routines')
            .then(response => {
                this.setState({routines: response.data});
            })
    }

    render() {

        let routinesTable = null;
        if (this.state.routines != null) {
            routinesTable = <RoutinesTable routines={this.state.routines}/>;
        }

        return (
            <div className={classes.routines}>
                <h2>Routines</h2>
                <section>Here's a table of all routines</section>
                {routinesTable}
            </div>
        );
    }
}

export default Routines;