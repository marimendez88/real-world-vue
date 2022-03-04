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
    fetchEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)

    },
    fetchEventById(id) {
        return apiClient.get('/events/' + id);
    }

}