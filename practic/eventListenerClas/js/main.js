// Есть список юзеров
// 1. Необходимо вывести их циклом создавай каждый ел
// через createElement
// 2. Добавить возможность удалять елемент через кнопку.
// Использовать делегирование событий
// 3. При клике на одного юзера выводим его имя в alert


const users = [
    {
      id: 1,
      name: "Bart",
      surname: "Simpson"
    },
    {
      id: 2,
      name: "Lisa",
      surname: "Simpson"
    },
    {
      id: 3,
      name: "Homer",
      surname: "Simpson"
    },
    {
      id: 4,
      name: "Marge",
      surname: "Simpson"
    }
  ]
function renderUsers(userList,link) {
    const ul = document.createElement('ul');
    ul.className = 'user-list';

    ul.addEventListener('click',function(e){
        console.log(e.target);
        console.log(e.target.nodeName);
        if(e.target.nodeName === 'BUTTON'){
            e.target.closest('.user__list__item').remove();
        }
        if(e.target.nodeName === 'LI') {
            const name = e.target.querySelector('span').textContent;
            alert(e.target.querySelector('button').dataset.sername);
        }
    })

    userList.forEach(el => {
     ul.append(createUserItem(el));
    });
    link.append(ul);
}

function createUserItem(userObj){
    const li = document.createElement('li');
    li.className = 'user__list__item';
    const span = document.createElement('span');
    span.textContent = userObj.name;
    li.append(span);
    const button = document.createElement('button');
    button.setAttribute('type','button');
    button.textContent = 'DELETE';
    button.dataset.surname= userObj.surname;
    li.append(button);
    return li;
}
renderUsers(users,document.body);

// =============================
const form = document.querySelector("form");
function handleAdd(e){
    e.preventDefault();
    const name = document.querySelector('[name = "name"]');
    const surname = document.querySelector('[name = "surname"]');

    createUserItem({name,surname});
}
