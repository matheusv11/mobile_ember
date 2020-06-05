import axios from 'axios';

const connection= axios.create({
    baseURL: 'http://192.168.1.4:3030'
});

export default connection;