let obj={}
function addTask(){
    let task =document.querySelector(".task").value;
    let taskName=document.querySelector(".task-name").value;
    console.log()
    obj.task=task;
    obj.taskName=taskName;
    console.log(obj)
    localStorage.setItem(task,taskName)
    let  taskAdd =document.querySelector(".task-con");
    let task1 =localStorage.getItem(task);
    taskAdd.innerHTML=taskAdd.innerHTML + task +"  "+" "+"  "+" " +" : " +" "+" "+ " "+task1 +"<br>";
    clear()
}
function clear(){
    let task =document.querySelector("#task").value ="";
    let taskName=document.querySelector("#task-name").value="";

}

function deleteTask(){
    let task =document.querySelector("#task").value;
    localStorage.removeItem(task)
    clear()
}