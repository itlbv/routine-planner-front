import React from 'react';
import classes from './RoutinesTable.module.css';
import InRowButton from '../../UI/TableButtons/InRowButton/InRowButton';

const routinesTable = props => {

    const editHandler = (id) => {
        console.log('edit ' + id);
    };

    const deleteHandler = (id) => {
        console.log('delete ' + id);
    };

    const table = props.routines.map(r => (
        <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.description}</td>
            <td>
                <InRowButton type={'edit'}
                             clicked={() => editHandler(r.id)}
                >Edit</InRowButton>
            </td>
            <td>
                <InRowButton type={'delete'}
                             clicked={() => deleteHandler(r.id)}
                >Delete</InRowButton>
            </td>
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