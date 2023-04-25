import { AxiosPromise, AxiosResponse } from "axios";

interface ModelProperties<T> {
    set(props: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface ModelClient<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface ModelEventHandler {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private props: ModelProperties<T>,
        private events: ModelEventHandler,
        private httpClient: ModelClient<T>
    ) {}

    on = this.events.on;
    trigger = this.events.trigger;
    get = this.props.get;

    set(props: T): void {
        this.props.set(props);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('ID not found');
        }

        this.httpClient.fetch(id)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save = (): void => {
        this.httpClient.save(this.props.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch((): void => {
                this.trigger('error');
            });
    }
}
