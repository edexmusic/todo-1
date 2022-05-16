export let maxId = 0;

export const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: ++maxId
    }
};

export let state = {
    todoData: [
        createTodoItem('Lorem ipsum dolor sit amet'),
        createTodoItem('Ad dolore dignissimos asperiores dicta facere optio'),
        createTodoItem('Rerum sed nulla eum vero'),
        createTodoItem('Qui dicta minus molestiae'),
        createTodoItem('Ratione temporibus aperiam harum'),
    ],
    term: '',
    isLoggedIn: false
};




