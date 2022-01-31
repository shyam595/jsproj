const form=document.getElementById("todos")
const input=document.getElementById("todo")
const ol=document.getElementById("olist")

const todos=JSON.parse(localStorage.getItem("todostring"))
if(todos){
    todos.forEach(todo=>addTodo(todo))
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todotext=input.value

    if(todo){
        todotext=todo.text
    }
    if(todotext){

        const todoe1=document.createElement("li")

        if(todo && todo.idCompleted){
            todoe1.classList.add("completed")
        }
        todoe1.innerText=todotext

        todoe1.addEventListener("click", (e)=>{
            todoe1.classList.toggle("completed")
            updateLs()
        })
        todoe1.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todoe1.remove()
            updateLs()
        })

        ol.appendChild(todoe1)
        input.value=''
        updateLs()
    }
}


function updateLs(){
    const todoels=document.querySelectorAll("li")
    const todos=[]
    todoels.forEach(todoe1=>{
        todos.push({text:todoe1.innerText,
        isCompleted:todoe1.classList.contains("completed")})
    })
    localStorage.setItem("todostring", JSON.stringify(todos))
}
