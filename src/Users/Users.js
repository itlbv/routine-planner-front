import React from 'react';
import classes from './Users.module.css';
import UsersTable from './UsersTable/UsersTable';

const users = () => (
    <div className={classes.users}>
        <h2>Users</h2>
        <section>Here's a table of all users</section>
        <UsersTable/>
    </div>
);

export default users;