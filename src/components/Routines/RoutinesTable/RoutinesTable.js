import React from 'react';
import classes from './RoutinesTable.module.css';
import InTableRowButton from '../../UI/InTableRowButton/InTableRowButton';

const routinesTable = props => {

    const table = props.routines.map(r => (
        <tr key={r.id}>
            <td>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.description}</td>
            <td>
                <InTableRowButton type={'edit'}
                                  clicked={() => props.edit(r.id)}
                >Edit</InTableRowButton>
            </td>
            <td>
                <InTableRowButton type={'delete'}
                                  clicked={() => props.delete(r.id)}
                >Delete</InTableRowButton>
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