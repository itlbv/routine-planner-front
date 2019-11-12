import React, {Component} from 'react';
import classes from './Routines.module.css';
import Aux from '../../hoc/Auxiliary';
import RoutinesTable from '../../components/Routines/RoutinesTable/RoutinesTable';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import CreateRoutineForm from '../../components/Routines/CreateRoutineForm/CreateRoutineForm';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {parseISO} from 'date-fns'
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
            this.setState({showCreateForm: true});
            showModal();
            getRoutine(routineId);
        };

        const createHandler = () => {
            this.setState({
                showCreateForm: true,
                routineToEdit: {
                    id: null,
                    name: '',
                    description: '',
                    startDate: new Date(),
                    endDate: null,
                    timeOfDay: null,
                    period: 'P2D'
                }
            });
            showModal();
        };

        const createRoutine = () => {
            const createdRoutine = {...this.state.routineToEdit};
            createdRoutine.timeOfDay = createdRoutine.timeOfDay.toISOString().substr(11, 8);

            axios.post('/routines/', createdRoutine)
                .then(() => hideAllForms())
                .catch(error => {
                    console.log('catch create error');
                    console.log(error.message);
                })
        };

        const updateRoutine = () => {
            const updatedRoutine = {...this.state.routineToEdit};
            updatedRoutine.timeOfDay = updatedRoutine.timeOfDay.toISOString().substr(0, 23);

            axios.put('/routines/' + updatedRoutine.id, updatedRoutine)
                .then(() => hideAllForms())
                .catch(error => {
                    console.log('catch update error');
                    console.log(error.message);
                })
        };

        const parseRoutineDatesAndSetState = routine => {
            routine.endDate = parseISO(routine.endDate);
            routine.startDate = parseISO(routine.startDate);

            const hours = routine.timeOfDay.substr(0, 2);
            const minutes = routine.timeOfDay.substr(3, 2);
            const timeOfDay = new Date();
            timeOfDay.setHours(hours);
            timeOfDay.setMinutes(minutes);
            routine.timeOfDay = timeOfDay;

            this.setState({routineToEdit: routine})
        };

        const getRoutine = (routineId) => {
            axios.get('/routines/' + routineId)
                .then(response => {
                    parseRoutineDatesAndSetState(response.data)
                })
                .catch(error => {
                    console.log('catch get error');
                    console.log(error.message);
                    hideAllForms()
                })
        };

        const updateHandler = () => {
            if (this.state.routineToEdit.id === null) {
                createRoutine()
            } else {
                updateRoutine()
            }
        };

        const deleteHandler = (routineId) => {
            axios.delete('/routines/' + routineId)
                .then(() => this.setState({randomKey: Math.random()}))
                .catch(error => {
                    console.log('catch delete error');
                    console.log(error.message);
                });
        };

        const showModal = () => {
            this.setState({modalVisible: true});
        };

        const hideAllForms = () => {
            this.setState({
                routineToEdit: null,
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

        const inputHandler = (name, value) => {
            const routine = {...this.state.routineToEdit};
            routine[name] = value;
            this.setState({
                routineToEdit: routine
            });
        };

        let createRoutineForm = null;
        if (this.state.showCreateForm) {
            createRoutineForm = <CreateRoutineForm routine={this.state.routineToEdit}
                                                   inputHandler={inputHandler}
                                                   submitHandler={updateHandler}
                                                   cancelHandler={hideAllForms}/>;
        }

        return (
            <Aux>
                <Modal visible={this.state.modalVisible} hideModalHandler={hideAllForms}>
                    {createRoutineForm}
                </Modal>
                <div className={classes.routinesContainer}>
                    <div className={classes.routines} key={this.state.randomKey}>
                        <CreateButton clicked={createHandler}>New routine</CreateButton>
                        {routinesTable}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withErrorHandler(Routines, axios);