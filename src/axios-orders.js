import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-cfe0e.firebaseio.com/'
})

export default instance