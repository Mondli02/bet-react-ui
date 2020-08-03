import axios from 'axios';
const axioApi = axios.create({  
        baseURL: 'http://localhost:5000/api/',

        timeout: 10000,
        withCredentials: true,
        //transformRequest: [(data) => JSON.stringify(data.data)],
        // headers: {
        // 	'Accept': 'application/json',
        // 	'Content-Type': 'application/json',
        // }
});
export default axioApi