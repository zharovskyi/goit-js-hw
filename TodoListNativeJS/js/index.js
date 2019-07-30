const todos = {
    items: [],
    add(text) {
        const todo = {
            id: Date.now(),
            text
        };
        this.items.push(todo);
        return todo;
    },
    delete(id){
        this.items = this.items.filter(item => item.id !== id);
    }
};

const refs = {
     editor: document.querySelector('.js-editor'),
     todoList: document.querySelector('.js-todo-list'),
};

refs.todoList.addEventListener('click', handleTodoListClick);
refs.editor.addEventListener('submit',handleEditorSubmit);


function handleEditorSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.text.value;
    const todo = todos.add(inputValue);
    const todoMark = buildTodoItem(todo);

    appendTodoItem(refs.todoList,todoMark);

    form.reset();
    
}

function  buildTodoItem(item){
    return `
    <li class="todo-list__item" data-id ="${item.id}">
    <div class="todo">
        <p class="todo__text">
       ${item.text}
        </p>
        <div class="todo__actions">
            <button class="button" type="button">REMOVE</button>
        </div>
    </div>
</li>`;
}

function appendTodoItem(parentRef,todoEl) {
    parentRef.insertAdjacentHTML('beforeend',todoEl);
}

function handleTodoListClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return;
    }
    const button = e.target;
    const li = button.closest('li.todo-list__item');
    const todoId = li.dataset.id;
    todos.delete(+todoId);

    
    refs.todoList.removeChild(li);
    console.log(todos);
}
