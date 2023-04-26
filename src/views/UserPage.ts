import { User, UserProps } from "../models/User";
import { UserList } from "../models/UserList";
import { UserDetails } from "./UserDetails";
import { UserForm } from "./UserForm";
import { UserListView } from "./UserListView";
import { View } from "./View";

export class UserPage extends View<User, UserProps> {

    constructor(
        protected parent: Element,
        protected model: User,
        private userList: UserList
    ) {
        super(parent, model);

        this.userList.fetch();

        this.bindWidgetsEvents();
    }

    bindWidgetsEvents(): void {
        this.model.on('save', () => {
            this.userList.fetch();
        });
    }

    widgetsMap(): {[key: string]: string} {
        return {
            userDetails: 'user_details',
            userForm: 'user_form',
            userList: 'user_list'
        };
    }

    renderWidgets(): void {
        new UserDetails(this.widgets.userDetails, this.model).render();
        new UserForm(this.widgets.userForm, this.model).render();
        new UserListView(this.widgets.userList, this.userList).render();
    }

    template(): string {
        return `
            <div>
                <hr />
                <section id="user_details"></section>
                <section id="user_form"></section>
                <hr />
                <section id="user_list"></section>
                <hr />
            </div>
        `;
    }
}
