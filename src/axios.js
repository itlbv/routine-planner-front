import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/routineplanner/rest'
});

export default instance;