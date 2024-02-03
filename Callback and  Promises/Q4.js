/*
Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL (https://jsonplaceholder.typicode.com/todos/1) and returns the parsed JSON response.
 */

async function fetchData(url) {
    try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then(console.log);