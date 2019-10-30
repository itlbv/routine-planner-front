import React, {Component} from 'react';
import classes from './Routines.module.css';
import RoutinesTable from './RoutinesTable/RoutinesTable';

class Routines extends Component {

    render() {
        return (
            <div className={classes.routines}>
                <h2>Routines</h2>
                <section>Here's a table of all routines</section>
                <RoutinesTable/>
            </div>
        );
    }
}

export default Routines;