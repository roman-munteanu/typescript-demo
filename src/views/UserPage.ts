import { User, UserProps } from "../models/User";
import { UserDetails } from "./UserDetails";
import { UserForm } from "./UserForm";
import { View } from "./View";

export class UserPage extends View<User, UserProps> {
    widgetsMap(): {[key: string]: string} {
        return {
            userDetails: 'user_details',
            userForm: 'user_form'
        };
    }

    renderWidgets(): void {
        new UserDetails(this.widgets.userDetails, this.model).render();
        new UserForm(this.widgets.userForm, this.model).render();
    }

    template(): string {
        return `
            <div>
                <hr />
                <section id="user_details"></section>
                <section id="user_form"></section>
                <hr />
            </div>
        `;
    }
}
