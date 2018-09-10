import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactmyburger-2a2d3.firebaseio.com/'
});

export default instance;