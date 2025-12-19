const ftList = document.getElementById("ft_list"); /* select the big todo div*/
const newButton = document.getElementById("new"); /* select button new*/

loadTodos(); /* load all todo saved in cookies*/

newButton.onclick = function () { /* execute function on click */
    const text = prompt("Enter a new TO DO:"); /* open text window to insert the todo */
    if (text && text.trim()) { /* check null text*/
        createTodo(text.trim()); /* create todo and save in cookies */
        saveTodos();
    }
};

function createTodo(text) { /* function to create todo */
    const todo = document.createElement("div"); /* cria novo div no DOM */
    /* DOM (Document Object Model) com JavaScript. 
    Ela é usada para criar novos elementos HTML dinamicamente, 
    antes mesmo deles aparecerem na página. */
    todo.textContent = text; /*  define the text */

    todo.onclick = function () {
        if (confirm("Do you want to delete this TO DO?")) {
            ftList.removeChild(todo); /* Remove todo from DOM and refresh cookies */
            saveTodos();
        }
    };

    ftList.prepend(todo); /* add todo to list top */
}

function saveTodos() { /* function to save list */
    const todos = []; /* temp array */
    for (let i = 0; i < ftList.children.length; i++) /* go through all todo */
        todos.push(ftList.children[i].textContent); /* save each todo text */

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
        /* Save todo in cookies */
}

function loadTodos() { /* To restore all todos */
    const match = document.cookie.match(/todos=([^;]+)/); /* search cookie called "all" */
    if (!match) return; /* se nao exisir, sai da function */

    const todos = JSON.parse(decodeURIComponent(match[1])); /* convert cookie in array */
    for (let i = todos.length - 1; i >= 0; i--) /* percorre de tras pra frente */
        createTodo(todos[i]); /* recrie todos in o */
}
