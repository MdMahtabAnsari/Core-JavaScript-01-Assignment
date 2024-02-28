/*
 2. You are working on a user athentication module for a web application Implement error handling for the
login process.Create a fnction login that simulates the user login process The function should take the
username and password as parameters and throw errors under certain conditions:
- If the username is not provided, throw an error indicating Username is required.
- If the password is not provided, throw an error indicating Password is required.
- If the username and password do not match any valid credentials, throw an error indicating Invalid
username or password
 */
const userDb = [{ username: 'admin', password: 'admin' }, { username: 'user', password: 'user' }, { username: 'test', password: 'test' }, { username: 'test1', password: 'test1' }, { username: 'test2', password: 'test2' }, { username: 'test3', password: 'test3' }, { username: 'test4', password: 'test4' }];
const findUser = (username, password) => {
    for(let {username, password} of userDb){
        if (username === username) {
           if(password === password){
               return true;
           }
           else{
               return false;
           }
        }
    }
    return false;
}

    const login = (username, password) => {
        if (!username || typeof username !== 'string' || username.trim() === '') {
            throw new Error('Username is required');
        }
        if (!password || typeof password !== 'string' || password.trim() === '') {
            throw new Error('Password is required');
        }
        if (!findUser(username, password)) {
            throw new Error('Invalid username or password');
        }
        return 'Login successful';
    }


    try {
       
        console.log(login('admin', ''));
        console.log(login('', 'admin'));
        console.log(login('admin', 'admin'));
    }
    catch (error) {
        console.log(error.message);
    }

