const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcrypt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const USERS_FILE = 'users.json';

// Load user data
function loadUsers() {
    if (fs.existsSync(USERS_FILE)) {
        return JSON.parse(fs.readFileSync(USERS_FILE));
    }
    return [];
}

// Save user data
function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Register user
function register() {
    rl.question('Enter your name: ', (name) => {
        rl.question('Enter your email: ', (email) => {
            rl.question('Enter your password: ', async (password) => {
                const users = loadUsers();
                if (users.find(user => user.email === email)) {
                    console.log('Email already exists. Please log in.');
                    rl.close();
                    return;
                }
                const hashedPassword = await bcrypt.hash(password, 10);
                users.push({ name, email, password: hashedPassword });
                saveUsers(users);
                console.log('Registration successful!');
                rl.close();
            });
        });
    });
}

// Login user
function login() {
    rl.question('Enter your email: ', (email) => {
        rl.question('Enter your password: ', async (password) => {
            const users = loadUsers();
            const user = users.find(user => user.email === email);
            if (user && await bcrypt.compare(password, user.password)) {
                console.log('Login successful!');
                userMenu(user);
            } else {
                console.log('Invalid credentials.');
                rl.close();
            }
        });
    });
}

// User menu
function userMenu(user) {
    console.log(`\nWelcome, ${user.name}!`);
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');
    rl.question('Choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                console.log(`Name: ${user.name}, Email: ${user.email}`);
                userMenu(user);
                break;
            case '2':
                console.log('Logged out.');
                rl.close();
                break;
            case '3':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Try again.');
                userMenu(user);
        }
    });
}

// Main menu
console.log('1. Register');
console.log('2. Login');
rl.question('Choose an option: ', (choice) => {
    if (choice === '1') {
        register();
    } else if (choice === '2') {
        login();
    } else {
        console.log('Invalid choice. Exiting...');
        rl.close();
    }
});