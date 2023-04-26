import { List } from "../models/List";

export abstract class ListView<T, U> {
    constructor(
        protected parent: Element,
        protected list: List<T, U>
    ) {
        this.bindListEvents();
    }

    bindListEvents(): void {
        this.list.on('change', () => {
            this.render();
        });
    }

    abstract renderItem(model: T, itemParent: Element): void;

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');

        this.list.models.forEach((model: T): void => {
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElement.content.append(itemParent);
        });

        this.parent.append(templateElement.content);
    }
}
