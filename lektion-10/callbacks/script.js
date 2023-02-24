/* 
    Callback Functions
    --------------------------

    (data) => {}        anonym funktion
    data => {}          anonym funktion

    -------------------------------------------------------

    const getTodosUsingPromise = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                for (var item of data)
                    console.log(item.title)
            })
    } 

    const getTodosAsync = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await res.json()

        for (var item of data)
            console.log(item.title)
    }

    getTodosUsingPromise()
    getTodosAsync()

    ------------------------------------------------------

    function getTodo(id, callback) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(res => res.json())
        .then(data => callback(data))
    }

    getTodo('2', function(data) {
        document.getElementById('title').innerText = data.title
        document.querySelector('#completed').innerText = data.completed
    })

    -----------------------------------------------

    function getTodo(id, callback) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(res => res.json())
        .then(data => callback(data))
    }

    getTodo(2, (data) => displayTodo(data))


    function displayTodo(data) {
        document.getElementById('title').innerText = data.title
        document.querySelector('#completed').innerText = data.completed
    }

*/



function getTodo(callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => res.json())
    .then(data => callback(data))
}

getTodo((data) => displayTodos(data))


function displayTodos(data) {
    todosElement = document.getElementById('todos')
    
    for(todo of data) {
        todosElement.innerHTML += 
            `<div class="col">
                <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">${todo.completed}</p>
                </div>
                </div>
            </div>`
    }
}
