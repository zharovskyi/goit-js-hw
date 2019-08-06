const refs = {
    form: document.querySelector('.form'),
    item: document.querySelector('input[name="item"]'),
    button: document.querySelector('button'),
    ul: document.querySelector('.list'),
    baseUrl: "/api/todo",
}
// Create Get

function getPosts() {
    fetch(`${baseUrl}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data;
        });
}

//   Create Post

function createPost(data) {
    if (data.includes(refs.item.value)) {
        let span = documement.createElement('span');
        span.textContent = 'Already added';
    } else {
        fetch(`${refs.baseUrl}`, {
                method: 'POST',
                body: JSON.stringify(data),

            })
            .then(res => res.json())
            .then(data => {
                this.data = data
                let span = documement.createElement('span');
                span.textContent = 'Added';
            })
    }
}

refs.form.addEventListener('submit', function (e) {
    e.preventDefault();
    getPosts();
    createPost(data);
    let li = document.createElement("li");
    li.textContent = refs.item.value;
    refs.ul.append(li);


})