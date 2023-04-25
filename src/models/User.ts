import { EventHandler } from "./EventHandler";
import { HTTPClient } from "./HTTPClient";
import { Model } from "./Model";
import { Properties } from "./Properties";

export interface UserProps {
    id?: number;
    name?: string;
    email?: string;
    age?: number;
}

export class User extends Model<UserProps> {
    static newInstance(rootURL: string, props: UserProps): User {
        return new User(
            new Properties<UserProps>(props),
            new EventHandler(),
            new HTTPClient<UserProps>(rootURL)
        );
    }
}
