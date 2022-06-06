import {API_URL} from '../config';
import Axios from "axios";


class APIRoot {
    path;

    constructor(path) {
        this.path = path;
    }

    pokeApi(headers = {}) {
        return Axios.create({
            baseURL: `${API_URL}${this.path}`,
            headers: {
                'Content-Type': 'application/json',
                ...(headers ?? {}),
            },
        });
    };


}

export default APIRoot;
