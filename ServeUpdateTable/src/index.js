import './styles.css';

const refs = {
    button: document.querySelector('.button'),
    table: document.querySelector('#table'),
    baseUrl: 'http://localhost:3000/table',
    // th: document.querySelectorAll('th'),
    // td: document.querySelectorAll('td'),
    // tr: document.querySelectorAll('tr'),

}

refs.button.addEventListener('click', updateTable);


function updateTable(e) {
    e.preventDefault();
    let fragment = document.createDocumentFragment();

    fetch(refs.baseUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            refs.table.innerHTML = '';

            let row = document.createElement('tr');
            data.headers.forEach((element, index) => {
                // console.log(element);
                let col = document.createElement('th');
                col.textContent = element;
                row.append(col);
                // console.log(col);
            })
            fragment.append(row);
            
            data.data.forEach((elem, ind) => {
                let row = document.createElement('tr');
                elem.forEach((e, i) => {
                    let col = document.createElement('th');
                    col.textContent = e;
                    row.append(col);
                })
                fragment.append(row);
                refs.table.append(fragment);       
            })
        })
}
