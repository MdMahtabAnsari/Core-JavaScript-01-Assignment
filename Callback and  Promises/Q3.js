/*
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.

API to be used: https://jsonplaceholder.typicode.com/todos/1
 */

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(`Getting some error ${error}`)
    }
}

fetchData().then(console.log);
