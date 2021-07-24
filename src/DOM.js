
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
        today.id = "Today";
        today.classList.add("projectName")
        today.classList.toggle("active");
        today.addEventListener("click", (e) =>{
            DOM.changeCurrProject(e);
        })
        sidebar.appendChild(today);
        

        const overdue = document.createElement("p");
        overdue.innerHTML = "Overdue";
        overdue.id = "Overdue";
        overdue.classList.add("projectName");
        overdue.addEventListener("click", (e) =>{
            DOM.changeCurrProject(e);
        })


        const addProject = document.createElement("div");
        addProject.id = "addProject";
        addProject.classList.add("addTask");
        
        const projInput = document.createElement("input");
        projInput.setAttribute("class", "projInput");

        projInput.setAttribute("type", "text");
        projInput.setAttribute("placeholder", "Add a project");
        projInput.addEventListener("keyup", function(e) {
            e.preventDefault();
        //on enter create new task            
            if(e.keyCode ===13 ){
                Data.addProject(e.target.value);          
            }
        });
        addProject.appendChild(projInput);

        sidebar.appendChild(overdue);
        sidebar.appendChild(addProject);
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
        let proj = document.getElementById("currProject");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        
        
        const delBtn = document.createElement("button");
        delBtn.setAttribute("type", "button");
        delBtn.id = "label";
        delBtn.classList.add("delete");
        delBtn.addEventListener("click", () => {
            let currentProject = document.getElementById("currProject");
            Data.deleteTask(currentProject.textContent, task);
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

        if(proj && proj.textContent !== "Today" && proj.textContent !== "Overdue"){
            let dateInput = DOM.createDateInput(task);

            taskDate.addEventListener("click", (e) => {
                e.target.parentNode.childNodes[3].classList.toggle("show");
                e.target.classList.toggle("show");

             });

            taskDiv.appendChild(dateInput);
        }
           
        return taskDiv;
    }
    static createDateInput(task){
        let div = document.createElement("div");
        div.classList.add("dateDiv");
        div.classList.toggle("show");

        let element = document.createElement("input");
        element.classList.add("dateInput");
        element.setAttribute("type", "date");
        element.id = task.name;
        
        element.addEventListener("change", (e) => {
            DOM.updateDate(e);
            DOM.updateTasks();

        });

        div.appendChild(element);
       
        return div;
    }

    static updateDate(e){
        let list = Data.getTodoList();
        let proj = list.getProject(document.getElementById("currProject").innerHTML);
        let task = proj.getTask(e.target.id);

        task.date = e.target.value;

        Data.saveTodoList(list);
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

        element.addEventListener("click", (e) => {
            DOM.changeCurrProject(e);
        })

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

    static changeCurrProject(e){
        const list = Data.getTodoList();
        
        let currentProject = list.getProject(document.getElementById("currProject").textContent);
       
        
        //untoggle active class for current proj, then toggle active clss for clicked proj
        document.getElementById(currentProject.name).classList.toggle("active");

        let newProject = document.getElementById(e.target.textContent);
        newProject.classList.toggle("active");

        //update current project name, then call update tasks
        document.getElementById("currProject").textContent = newProject.textContent;
        DOM.updateTasks();
        
    }
}


