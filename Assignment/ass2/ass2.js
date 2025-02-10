const { readFile } = require('fs/promises');
const filePath = 'sample1.json';


// Fetching with Callbacks
const callbackFetch = (filePath, callback) => {
    readFile(filePath, 'utf-8').then(data => callback(null, JSON.parse(data))).catch(err => callback(err, null));
};


callbackFetch(filePath, (err, data) => err ? console.error('Error:', err) : console.log('Callback:', data));


// Fetching with Promises
const promiseFetch = filePath =>
    readFile(filePath, 'utf-8').then(data => console.log('Promise:', JSON.parse(data))).catch(err => console.error('Error:', err));

promiseFetch(filePath);

// Fetching with Async/Await
const asyncAwaitFetch = async filePath => {
    try {
        const data = await readFile(filePath, 'utf-8');
        console.log('Async/Await:', JSON.parse(data));
    } catch (err) {
        console.error('Error:', err);
    }
};


asyncAwaitFetch(filePath);
