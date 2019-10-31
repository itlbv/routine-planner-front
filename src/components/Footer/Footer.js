import React from 'react';
import classes from './Footer.module.css'

const footer = () => (
    <section className={classes.footer}>
        <div>Created with: React.js</div>
        <a href={"https://github.com/itlbv"}>Github</a>
    </section>
);

export default footer;