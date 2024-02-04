/*Create a function racePromises that takes an array of promises and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this. */

const racePromises = async (promises) => {
    let result = await Promise.race(promises);
    return result;
}

let promises = [fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()), fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(response =>
response.json())];
racePromises(promises).then((data) => console.log(data));