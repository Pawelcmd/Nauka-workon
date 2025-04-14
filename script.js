fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        document.querySelector('#loading').style.display = "none";

        if (!response.ok) {
            if (response.status === 404) {
                document.querySelector('#error-message').innerHTML = "Zawartosc nie istnieje"
            } else if (response.status === 500) {
                document.querySelector('#error-message').innerHTML = "Zawartosc nie istnieje"
            }
        }
        return response.json();
    })
    .then((data) => {
        const container = document.querySelector('#user-container');
        container.innerHTML = data.map(user => `
            <p>Imię: ${user.name}</p>
        `).join('');
    })
    .catch((error) => {
        document.querySelector('#error-message').innerHTML = "Błąd: " + error.message;
    });




// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json(0))
//     .then((data) => {
//         data.map(post =>
//             console.log(post.title)
//         )
//     })



// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(response => {
//     response.data.map(post => {
//       console.log(post.title);
//     });
//   })
// .catch(error => {
//     console.error('Błąd:', error.message);
// });

// Promise.all([
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
// ])
// .then(response => response.json(0))
// .then ((data) => {
//     data.map(post => {
//         console.log(post.title);
//     })
// })

// const userId = 1;
// const fetchUseresPosts = (userId) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => response.json())
//     .then((posts) => console.log(posts.forEach((post) => console.log(post))));
// };

// fetchUseresPosts(userId);

const postForm = document.querySelector('#postForm')
const messageDiv = document.querySelector('#message')

postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = postForm.elements.title.value;
    const body = postForm.elements.body.value;
    console.log(title, body);

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {title, body, userId:1}
    )
    console.log(response);
    if (response.data) {
        messageDiv.textContent="dane zostaly zapisane"
    }else {
        messageDiv.textContent = "dane nie zostaly zapisane"
    }
    
});