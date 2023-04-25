import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserDetails extends View<User, UserProps> {
    template(): string {
        return `
            <dl>
                <dt><strong>User Details</strong></dt>
                <dd>Name: ${this.model.get('name')}</dd>
                <dd>Email: ${this.model.get('email')}</dd>
                <dd>Age: ${this.model.get('age')}</dd>
            </dl>
            `;
    }
}
