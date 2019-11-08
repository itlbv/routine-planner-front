import React from 'react';
import classes from './RoutinesTable.module.css';
import InTableRowButton from '../../UI/InTableRowButton/InTableRowButton';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

const routinesTable = props => {

    const table = props.routines.map(r => (
        <tr key={r.id}>
            <td>{r.timeOfDay.substr(0, 5)}</td>
            <td>{r.name}</td>
            <td>{r.description}</td>
            <td>
                <InTableRowButton type={'edit'}
                                  clicked={() => props.edit(r.id)}
                ><AiOutlineEdit/></InTableRowButton>
            </td>
            <td>
                <InTableRowButton type={'delete'}
                                  clicked={() => props.delete(r.id)}
                ><AiOutlineDelete/></InTableRowButton>
            </td>
        </tr>
    ));

    return (
        <div className={classes.containerTable}>
            <table>
                <thead>
                <tr>
                    <th>TIME</th>
                    <th>TITLE</th>
                    <th/>
                    <th/>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {table}
                </tbody>
            </table>
        </div>
    );
};

export default routinesTable;