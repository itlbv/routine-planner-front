import React from 'react';
import classes from './RoutinesTable.module.css';
import InRowButton from '../../UI/TableButtons/InRowButton/InRowButton';

const routinesTable = props => {

    const table = props.routines.map(r => (
        <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.description}</td>
            <td><InRowButton>Edit</InRowButton></td>
            <td><InRowButton>Delete</InRowButton></td>
        </tr>
    ));

    return (
        <table className={classes.routinesTable}>
            <thead>
            <tr>
                <th>#</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
            </tr>
            </thead>
            <tbody>
            {table}
            </tbody>
        </table>
    );
};

export default routinesTable;