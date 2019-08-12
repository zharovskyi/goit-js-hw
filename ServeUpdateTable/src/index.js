import './styles.css';

const refs = {
    button: document.querySelector('.button'),
    table: document.querySelector('#table'),
    baseUrl: 'http://localhost:3000/table',
    th: document.querySelectorAll('th'),
    td: document.querySelectorAll('td'),
    tr: document.querySelectorAll('tr'),
 
}

refs.button.addEventListener('click', updateTable);


function updateTable(e) {
    e.preventDefault();
    fetch(refs.baseUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            data.headers.forEach((element, index) => {
                // console.log(element);
                refs.th[index].textContent = element;
            })
            data.data.forEach((elem,ind) => {
                // console.log(elem);
                // console.log(ind);
                elem.forEach((e,i) => {
                    refs.tr[ind + 1].querySelectorAll('td');
                    console.log(refs.tr[ind + 1].querySelectorAll('td'));
                    // for(let td of refs.td){
                        // refs.td[i].textContent = e;
                        
                      
                    // }
                    
                })

            })
        })
}