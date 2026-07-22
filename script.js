let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const taskInput =
document.getElementById("taskInput");


const addBtn =
document.getElementById("addBtn");


const taskList =
document.getElementById("taskList");



// Display saved tasks

displayTasks();



// Add Task

addBtn.addEventListener("click",()=>{


let taskText = taskInput.value.trim();



if(taskText===""){

alert("Please enter a task");

return;

}



let task = {

id:Date.now(),

text:taskText,

completed:false

};



tasks.push(task);



saveTasks();


displayTasks();


taskInput.value="";


});




// Display Tasks

function displayTasks(){


taskList.innerHTML="";



tasks.forEach(task=>{


let li=document.createElement("li");



if(task.completed){

li.classList.add("completed");

}



li.innerHTML=

`

<span>${task.text}</span>

<button class="delete">
Delete
</button>

`;



// Mark completed

li.querySelector("span")
.addEventListener("click",()=>{


task.completed=!task.completed;


saveTasks();


displayTasks();


});




// Delete task

li.querySelector(".delete")
.addEventListener("click",()=>{


tasks =
tasks.filter(t=>t.id!==task.id);


saveTasks();


displayTasks();


});



taskList.appendChild(li);



});


}



// Save in Local Storage

function saveTasks(){


localStorage.setItem(

"tasks",

JSON.stringify(tasks)

);


}
