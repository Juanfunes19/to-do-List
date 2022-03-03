// colocá las declaraciones acá
let listaDeTareas = [];
const inputTarea = document.getElementById(`task`);
const inputPrioridad = document.getElementById(`prioridad`);
const ul = document.getElementById(`lista-de-tareas`)
const button = document.getElementById(`agregar`)
const titulo = document.querySelector(`.titulo`)

//declaramos el class Tarea
class Tarea{
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    agregarTarea(task){
        listaDeTareas.push(task)
    }
}

// Punto 2
const mostrarLista = () =>{
    ul.innerHTML = ""
    listaDeTareas.forEach((todo, index) =>{
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" id="${index}">${todo.nombre} -
        Prioridad: ${todo.prioridad} <i class="far fa-times-circle" onclick="eliminar(${index})"></i></li>`
    })
}

// punto 3
const todoList = () =>{
    const tarea1 = new Tarea (inputTarea.value,inputPrioridad.value)
    if( inputTarea.value == "" || inputPrioridad.value == ""){
        alert(`Usted no ha llenado todos los campos`)
    }else{
        tarea1.agregarTarea(tarea1)
        mostrarLista()
        inputTarea.value = ""
        inputPrioridad.value = "Default"
    }  
}

button.addEventListener(`click`, todoList)


// Punto 4
const eliminar = (index) =>{
    listaDeTareas.splice(index, 1 )
    mostrarLista()
}
