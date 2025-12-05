let res=fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>{
    return res.json();
})
.then(post=>{
    console.log(post);
})
console.log(res)
let fetch_API=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();
    console.log(data);
}
fetch_API();