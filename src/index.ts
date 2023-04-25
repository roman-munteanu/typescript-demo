import { User } from "./models/User";
import { UserPage } from "./views/UserPage";


const rootURL = 'http://localhost:3000/users';

/*
// for create:
// const user = User.newInstance(rootURL, {name: 'RM', age: 38});

// for update/fetch:
const user = User.newInstance(rootURL, {id: 1});

user.on('save', () => {
    console.log('on save:');
    console.log(user);
});
user.on('error', () => {
    console.log('on error:');
    console.log('error');
});

// user.save();


user.set({id: 1, name: 'Highlander', email: 'rm@email.com', age: 238});
user.save();


user.on('change', () => {
    console.log('on change:');
    console.log(user);
});
user.fetch();
*/


const user = User.newInstance(rootURL, {name: 'R2D2', email: 'r2d2@email.com', age: 350});

const mainContainer = document.getElementById('main');
if (mainContainer) {
    const userPage = new UserPage(mainContainer, user);
    userPage.render();
} else {
    throw new Error('main container not found');
}
