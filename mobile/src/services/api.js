import axios from 'axios';

const connection= axios.create({
    baseURL: 'http://192.168.1.7:3030'
});

export default connection;