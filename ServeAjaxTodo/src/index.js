import './styles.css';


const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('input[name="item"]'),
    button: document.querySelector('button'),
    ul: document.querySelector('.list'),
    baseUrl: "http://localhost:3000/todo",
    span: document.createElement('span'),
}


refs.form.append(refs.span);
let arr = [];
// Create Get
function getPosts() {
    fetch(`${refs.baseUrl}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            arr = data;
            renderList(arr)
        });
}
getPosts()

function renderList() {

    console.log(arr);
    let fragment = document.createDocumentFragment();
    arr.forEach(el => {
        // console.log(el);
        let li = document.createElement("li");
        li.style.listStyle = 'none';
        let label = document.createElement('label');
        label.textContent = el.title;
        let radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        li.append(radio, label)
        fragment.append(li);
    })

    refs.ul.append(fragment);
}

// //   Create Post

refs.form.addEventListener('submit', hendler);

function hendler(e) {
    e.preventDefault();
    console.log('sbm');
    const inputValue = refs.input.value;
    const unique = arr.find(el => el.title === inputValue);
    console.log(unique);
    if (!unique) {
        // console.log(arr);
        fetch(`${refs.baseUrl}`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    title: inputValue
                }),

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                arr.push({
                    title: inputValue
                });
                clearListItem();
                renderList();
                refs.span.classList = 'added';
                refs.span.textContent = 'Added';
            })
    } else {
        refs.span.classList = 'added';
        refs.span.textContent = 'Added already';
        return;
    }
}

function clearListItem() {
    refs.ul.innerHTML = '';
}