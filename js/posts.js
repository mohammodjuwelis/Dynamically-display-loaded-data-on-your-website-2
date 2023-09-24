function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => displayPosts(data))
}

function displayPosts(posts) {
    // console.log(posts);
    const postCOntainer = document.getElementById('postContainer');
    
    for(let i = 0; i < posts.length; i++) {
        console.log(posts[i]);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
        <h3>userId ${posts[i].userId}</h3>
        <h4>id ${posts[i].id}</h4>
        <p>description ${posts[i].body}</p>
        `;
        postCOntainer.appendChild(postDiv);
    }
}

loadData()



