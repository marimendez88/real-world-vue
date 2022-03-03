import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/marimendez88/vue-mock-database',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    fetchEvents() {
        return apiClient.get('/events');
    }
}