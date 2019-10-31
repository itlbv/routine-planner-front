import React, {Component} from 'react';
import classes from './Routines.module.css';
import RoutinesTable from './RoutinesTable/RoutinesTable';
import EditRoutineForm from './EditRoutineForm/EditRoutineForm';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import CreateButton from '../UI/CreateButton/CreateButton';
import axios from '../axios';

class Routines extends Component {

    state = {
        routines: null,
        routineToEdit: null,
        modalVisible: false
    };

    componentDidMount() {
        axios.get('/routines')
            .then(response => (
                this.setState({routines: response.data})
            ))
    }

    render() {

        const editHandler = (routineId) => {
            console.log('edit ' + routineId);
            showModal();
            getRoutine(routineId);
        };

        const getRoutine = (routineId) => {
            axios.get('/routines/' + routineId)
                .then(response => (
                    this.setState({routineToEdit: response.data})
                ))
        };

        const createRoutine = () => {
            console.log('create routine!')
        };

        const updateRoutine = () => {
            console.log('update routine!')
        };

        const deleteHandler = (routineId) => {
            console.log('delete ' + routineId);
        };

        const showModal = () => {
            this.setState({modalVisible: true});
        };

        const hideModal = () => {
            this.setState({modalVisible: false, routineToEdit: null});
        };

        let routinesTable = <Spinner/>;
        if (this.state.routines != null) {
            routinesTable = <RoutinesTable routines={this.state.routines}
                                           edit={editHandler}
                                           delete={deleteHandler}/>;
        }

        let editRoutineForm = null;
        if (this.state.modalVisible) {
            editRoutineForm = <EditRoutineForm routine={this.state.routineToEdit}
                                               submitHandler={updateRoutine}
                                               cancelHandler={hideModal}/>;
        }

        let newRoutineForm = null;
        if (this.state.modalVisible) {
            newRoutineForm = null;
        }

        return (
            <div className={classes.routines}>
                <Spinner/>
                <Modal visible={this.state.modalVisible} hideModalHandler={hideModal}>
                    {editRoutineForm}
                    {newRoutineForm}
                </Modal>
                <h2>Routines</h2>
                <section>Here's a table of all routines</section>
                <CreateButton clicked={createRoutine}>New routine</CreateButton>
                {routinesTable}
            </div>
        );
    }
}

export default Routines;