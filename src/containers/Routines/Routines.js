import React, {Component} from 'react';
import classes from './Routines.module.css';
import RoutinesTable from '../../components/Routines/RoutinesTable/RoutinesTable';
import EditRoutineForm from '../../components/Routines/EditRoutineForm/EditRoutineForm';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import CreateRoutineForm from '../../components/Routines/CreateRoutineForm/CreateRoutineForm';
import axios from '../../axios';

class Routines extends Component {

    state = {
        routines: null,
        routineToEdit: null,
        showEditForm: null,
        showCreateForm: null,
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
            this.setState({showEditForm: true});
            showModal();
            getRoutine(routineId);
        };

        const createHandler = () => {
            this.setState({showCreateForm: true});
            showModal();
        };

        const getRoutine = (routineId) => {
            axios.get('/routines/' + routineId)
                .then(response => (
                    this.setState({routineToEdit: response.data})
                ))
        };

        const createRoutine = (newRoutine) => {
            console.log('create routine!');
            axios.post('/routines/', newRoutine)
                .then(() => console.log('create!'))
        };

        const updateRoutine = (updatedRoutine) => {
            console.log('update routine!');
            axios.post('/routines/', updatedRoutine)
                .then(() => console.log('update!'))
        };

        const deleteHandler = (routineId) => {
            console.log('delete ' + routineId);
        };

        const showModal = () => {
            this.setState({modalVisible: true});
        };

        const hideModal = () => {
            this.setState({
                routineToEdit: null,
                showEditForm: false,
                showCreateForm: false,
                modalVisible: false
            });
        };

        let routinesTable = <Spinner/>;
        if (this.state.routines != null) {
            routinesTable = <RoutinesTable routines={this.state.routines}
                                           edit={editHandler}
                                           delete={deleteHandler}/>;
        }

        let editRoutineForm = null;
        if (this.state.showEditForm) {
            editRoutineForm = <EditRoutineForm routine={this.state.routineToEdit}
                                               submitHandler={updateRoutine}
                                               cancelHandler={hideModal}/>;
        }

        let createRoutineForm = null;
        if (this.state.showCreateForm) {
            createRoutineForm = <CreateRoutineForm submitHandler={createRoutine}
                                                   cancelHandler={hideModal}/>;
        }

        return (
            <div className={classes.routines}>
                <Spinner/>
                <Modal visible={this.state.modalVisible} hideModalHandler={hideModal}>
                    {editRoutineForm}
                    {createRoutineForm}
                </Modal>
                <h2>Routines</h2>
                <section>Here's a table of all routines</section>
                <CreateButton clicked={createHandler}>New routine</CreateButton>
                {routinesTable}
            </div>
        );
    }
}

export default Routines;