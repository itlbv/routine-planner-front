import React from 'react';
import classes from './UsersTable.module.css';

const usersTable = () => (
    <table className={classes.usersTable}>
        <thead>
        <tr>
            <th>#</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        </tbody>
    </table>
);

export default usersTable;