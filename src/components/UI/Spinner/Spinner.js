import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const spinner = () => (
    <PulseLoader sizeUnit={"px"}
                 size={20}
                 color={'deepskyblue'}/>
);

export default spinner;