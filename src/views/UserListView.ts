import { User, UserProps } from "../models/User";
import { ListView } from "./ListView";

export class UserListView extends ListView<User, UserProps> {

    renderItem(model: User, itemParent: Element): void {

        const itemContent = `
            <div>ID: ${model.get('id')}, Name: ${model.get('name')}, Email: ${model.get('email')}, Age: ${model.get('age')}</div>
        `;
        const templateElement = document.createElement('template');
        templateElement.innerHTML = itemContent;

        itemParent.append(templateElement.content);
    }
}
