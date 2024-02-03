/*
Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
fetched. Return an object with user details and posts.
API to be used
For user: https://jsonplaceholder.typicode.com/users/${userId}
For post: https://jsonplaceholder.typicode.com/posts?userId=${userId}
*/

const fetchUserDataAndPosts = async (userId) => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetails = await user.json();
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = await posts.json();
    return { userDetails, userPosts };
}
let Data = fetchUserDataAndPosts(1).then((data)=>data);

console.log(Data);

