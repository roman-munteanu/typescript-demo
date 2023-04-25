import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
    template(): string {
        return `
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" class="name-input" value="" placeholder="${this.model.get('name')}" />
                <br />
                <label for="email">Email:</label>
                <input type="text" name="email" class="email-input" value="" placeholder="${this.model.get('email')}" />
                <br />
                <label for="age">Age:</label>
                <input type="number" name="age" class="age-input" value="" placeholder="${this.model.get('age')}" />
                <br />
                <button type="button" class="submit-btn">Submit</button>
            </div>
            `;
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.submit-btn': this.onSubmitClick
        };
    }

    onSubmitClick = (): void => {
        const userProps: UserProps = {};

        const nameInput: HTMLInputElement | null = this.parent.querySelector('.name-input');
        if (nameInput) {
            userProps['name'] = nameInput.value;
        }

        const emailInput: HTMLInputElement | null = this.parent.querySelector('.email-input');
        if (emailInput) {
            userProps['email'] = emailInput.value;
        }

        const ageInput: HTMLInputElement | null = this.parent.querySelector('.age-input');
        if (ageInput) {
            userProps['age'] = parseInt(ageInput.value);
        }

        this.model.set(userProps);
        this.model.save();
    }
}
