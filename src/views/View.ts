import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<U>, U extends HasId> {

    widgets: {[key: string]: Element} = {};

    constructor(
        protected parent: Element,
        protected model: T
    ) {
       this.bindModelEvents();
    }

    abstract template(): string;

    eventsMap(): {[key: string]: () => void} {
        return {};
    }

    // widgetName - elementID
    widgetsMap(): {[key: string]: string} {
        return {};
    }

    bindModelEvents(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    renderWidgets(): void {
        // can be implemented in child classes
    }

    render(): void {
        this.parent.innerHTML = '';
       
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.mapWidgets(templateElement.content);
        this.renderWidgets();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, classSelector] = eventKey.split(':');

            fragment.querySelectorAll(classSelector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    mapWidgets(fragment: DocumentFragment): void {
        const widgetsMap = this.widgetsMap();

        for (let key in widgetsMap) {
            const idSelector = widgetsMap[key];

            const element = fragment.getElementById(idSelector);
            if (element) {
                this.widgets[key] = element;
            }
        }
    }
}
