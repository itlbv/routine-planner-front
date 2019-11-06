import React, {Component} from 'react';
import classes from './Routines.module.css';
import RoutinesTable from '../../components/Routines/RoutinesTable/RoutinesTable';
import EditRoutineForm from '../../components/Routines/EditRoutineForm/EditRoutineForm';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import CreateRoutineForm from '../../components/Routines/CreateRoutineForm/CreateRoutineForm';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
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
            .catch(error => {
                console.log(error)
            })
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

        const createRoutine = (newRoutine) => {
            console.log(newRoutine);
            axios.post('/routines/', newRoutine,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(() => hideAllForms())
                .catch(error => {
                    console.log('catch create error');
                    console.log(error.message);
                })
        };

        const getRoutine = (routineId) => {
            axios.get('/routines/' + routineId)
                .then(response => (
                    this.setState({routineToEdit: response.data})
                ))
                .catch(error => {
                    console.log('catch get error');
                    console.log(error.message);
                    hideAllForms()
                })
        };

        const updateRoutine = (updatedRoutine) => {
            axios.put('/routines/', updatedRoutine)
                .then(() => hideAllForms())
                .catch(error => {
                    console.log('catch update error');
                    console.log(error.message);
                })
        };

        const deleteHandler = (routineId) => {
            axios.delete('/routines/' + routineId);
        };

        const showModal = () => {
            this.setState({modalVisible: true});
        };

        const hideAllForms = () => {
            this.setState({
                routineToEdit: null,
                showEditForm: false,
                showCreateForm: false,
                modalVisible: false
            });
        };

        let routinesTable = <Spinner/>;
        if (this.state.routines !== null) {
            routinesTable = <RoutinesTable routines={this.state.routines}
                                           edit={editHandler}
                                           delete={deleteHandler}/>;
        }

        let editRoutineForm = null;
        if (this.state.showEditForm) {
            editRoutineForm = <EditRoutineForm routine={this.state.routineToEdit}
                                               submitHandler={updateRoutine}
                                               cancelHandler={hideAllForms}/>;
        }

        let createRoutineForm = null;
        if (this.state.showCreateForm) {
            createRoutineForm = <CreateRoutineForm submitHandler={createRoutine}
                                                   cancelHandler={hideAllForms}/>;
        }

        return (
            <div className={classes.routines}>
                <CreateRoutineForm submitHandler={createRoutine}
                                   cancelHandler={hideAllForms}/>
                <Modal visible={this.state.modalVisible} hideModalHandler={hideAllForms}>
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

export default withErrorHandler(Routines, axios);