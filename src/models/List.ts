import axios, { AxiosResponse } from "axios";
import { EventHandler } from "./EventHandler";

export class List<T, U> {
    models: T[] = [];
    events: EventHandler = new EventHandler();

    constructor(
        private rootUrl: string,
        private unmarshaler: (props: U) => T
    ) {}

    on = this.events.on;
    trigger = this.events.trigger;

    fetch(): void {
        this.models = [];

        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((props: U): void => {
                    // const user = User.newInstance(props);
                    // this.models.push(user);
                    this.models.push(this.unmarshaler(props));
                });

                this.trigger('change');
            });
    }
}
