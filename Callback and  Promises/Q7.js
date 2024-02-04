/*Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the
URLs concurrently. Return an array of responses. */

const fetchMultipleData = async (urls) => {
    let data = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));
    return data;
}

let urls = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/posts?userId=1'];
fetchMultipleData(urls).then((data) => console.log(data));
