
import Data from "./Data.js"
import Project from "./Project.js";
import Task from "./Task.js"
import TodoList from "./TodoList.js";

const content = document.getElementById("content");






export default class DOM{
    
    static loadPage(){
        if(localStorage.getItem("todoList") === null){
             Data.saveTodoList(new TodoList());
        }
       

        content.appendChild(DOM.createHeader());

        //create main  to hold rest of stuff
        const main = document.createElement("main");
        main.setAttribute("id", "main");
        content.appendChild(main);
        
        const sidebar = document.createElement("div");
        sidebar.setAttribute("id", "sidebar");
        main.appendChild(DOM.createSidebar(sidebar));

        main.appendChild(DOM.createTasksPage(Data.getTodoList().getProject("Today")));
    }

    static createHeader(){
        const header = document.createElement("header");
        const title = document.createElement("h1");
        title.textContent = "Todo List";
        
        header.appendChild(title);

        return header;
    }
    
    static createSidebar(sidebar){
      

        const today = document.createElement("p");
        today.innerHTML = "Today";
        today.classList.add("projectName")
        sidebar.appendChild(today);
        

        const overdue = document.createElement("p");
        overdue.innerHTML = "Overdue";
        overdue.classList.add("projectName");
       
        sidebar.appendChild(overdue);
        DOM.displayProjects(sidebar);
        
        return sidebar;
    }
   
    static displayProjects(sidebar){
        //create project object for each project in todolist
        let list = Data.getTodoList().projects;
        for(let i = 2; i < list.length; i++){
            
           sidebar.appendChild(DOM.createProject(list[i].name));
        }
        
    }

    static createTasksPage(project){
        const tasksArea = document.createElement("div");
        tasksArea.setAttribute("id", "tasks");

        const currProject = document.createElement("div");
        currProject.setAttribute("id", "currProject");
        currProject.textContent = project.name;
        tasksArea.appendChild(currProject);

        const addTask = document.createElement("div");
        addTask.setAttribute("id", "addTask");
        addTask.setAttribute("class", "addTask");

        const plusBtn = document.createElement("button");
        plusBtn.setAttribute("type", "button");
        plusBtn.setAttribute("id", "plusBtn");
        plusBtn.setAttribute("class", "rotate");
        plusBtn.addEventListener("click", ()=> {
            taskInput.classList.toggle("show");
            taskInput.value = ""
        });
        addTask.appendChild(plusBtn);

        const taskInput = document.createElement("input");
        taskInput.setAttribute("id", "taskInput");
        taskInput.setAttribute("class", "taskInput");
        taskInput.setAttribute("type", "text");
        taskInput.setAttribute("placeholder", "Add a task");
        taskInput.addEventListener("keyup", function(e) {
            e.preventDefault();
            
            //get reference to currentProject
            let currentProject = document.getElementById("currProject");
        //on enter create new task            
            if(e.keyCode ===13 ){
                // Data.addProject(e.target.value);
                Data.addTask(currProject.textContent, new Task(e.target.value));
                plusBtn.click();
            }
        });
        addTask.appendChild(taskInput);

        tasksArea.appendChild(addTask);

        DOM.createAllTasks(project, tasksArea);

        return tasksArea;
    }
    
    static createTask(task){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        
        const delBtn = document.createElement("button");
        delBtn.setAttribute("type", "button");
        delBtn.id = "label";
        delBtn.classList.add("delete");
        delBtn.addEventListener("click", () => {
            let currentProject = document.getElementById("currProject");
            Data.deleteTask(currentProject.textContent,task);
        });


        const taskName = document.createElement("p");
        taskName.classList.add("taskName");
        taskName.innerHTML = task.name;

        const taskDate = document.createElement("p");
        taskDate.classList.add("taskDate");
        taskDate.innerHTML = task.date;

        taskDiv.appendChild(delBtn);
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskDate);
        return taskDiv;
    }

    static updateTasks(){
        let project = Data.getTodoList().getProject(document.getElementById("currProject").textContent);
        let tasksArea = document.getElementById("tasks");

        DOM.deleteTasks(tasksArea);
        DOM.createAllTasks(project, tasksArea);
    }

    static deleteTasks(tasksArea){
        for(let i = tasksArea.childNodes.length - 1; i >= 2; i--){
            tasksArea.removeChild(tasksArea.childNodes[i]);
        }
    }

    static createAllTasks(project, tasksArea){
         //call function for each task of project, and create divs for them
         for(let i = 0; i < project.tasks.length; i++){
            tasksArea.appendChild(DOM.createTask(project.tasks[i]));
        }
    }

    static createProject(projectName){
        const element = document.createElement("p");

        element.innerHTML = projectName;
        element.classList.add("projectName");
        element.id = projectName;

        element.addEventListener("contextmenu", (e) => {
            e.preventDefault();

        if(document.getElementById("context-menu")){
                document.getElementById("context-menu").remove();
        }

            let element = DOM.createContextMenus(e.target.textContent);
            document.body.appendChild(element);
            element.style.top = e.clientY + "px" ;
            element.style.left = e.clientX + "px";
            element.classList.add("active");
        });
       
        return element;
    }

    static createContextMenus(name){
        let menu = document.createElement("div");
        menu.classList.add("context-menu");
        menu.id = "context-menu";
       
        let rename = document.createElement("div");
        rename.textContent = "Rename";

        rename.classList.add("item");
        menu.style.borderRadius = "5px 5px 5px 5px";
        rename.addEventListener("click", () => {
            Data.renameProject(name);
        });
            
        menu.appendChild(rename);
         
        let item = document.createElement("div");
        let img = document.createElement("img");
        img.src = "images/delete_icon_red.png"
        item.appendChild(img);
        item.classList.add("item");
        item.classList.add("deleteProject");
        item.style.borderRadius = "0px 0px 5px 5px";
        item.addEventListener("click", () =>{
            Data.deleteProject(name);
        });
        
        menu.appendChild(item);

        //add event listerner that runs once to close the context menu
        window.addEventListener("click", () =>{
            if( document.getElementById("context-menu")){
                document.getElementById("context-menu").remove();
            }
            
        }, {once: true});
        return menu;
    }

    static updateProjects(){
        let sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = "";
        DOM.createSidebar(sidebar);
    }

    static deleteProjects(sidebar){ 
    
        for(let i = sidebar.childNodes.length - 1; i >= 2; i--){
            sidebar.removeChild(sidebar.childNodes[i]);
            
        }
    }
}


