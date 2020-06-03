import axios from 'axios';

const connection= axios.create({
    baseURL: 'http://192.168.1.16:3030'
});

export default connection;