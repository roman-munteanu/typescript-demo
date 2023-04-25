type Callback = () => void;

export class EventHandler {
    eventsMap: {[key: string]: Callback[]} = {};

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.eventsMap[eventName] || [];
        handlers.push(callback);
        this.eventsMap[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.eventsMap[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback();
        });
    }
}
