import axios, {AxiosPromise} from 'axios';

interface HasId {
    id?: number;
}

export class HTTPClient<T extends HasId> {
    constructor(private url: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.url}/${id}`);
    }

    save(data: T): AxiosPromise {
        // const id = data.id;
        // ES destructuring:
        const {id} = data;

        if (id) {
            return axios.put(`${this.url}/${id}`, data);
        } 

        return axios.post(this.url, data);
    }
}
