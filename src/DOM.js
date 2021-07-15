
import Data from "./Data.js"
import Project from "./Project.js";


const content = document.getElementById("content");






export default class DOM{
    
    static loadPage(){
        content.appendChild(DOM.createHeader());

        //create main  to hold rest of stuff
        const main = document.createElement("main");
        main.setAttribute("id", "main");
        content.appendChild(main);
        
        const sidebar = document.createElement("div");
        sidebar.setAttribute("id", "sidebar");
        main.appendChild(DOM.createSidebar(sidebar));

        main.appendChild(DOM.createTasksPage());
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

    static createTasksPage(){
        const tasksArea = document.createElement("div");
        tasksArea.setAttribute("id", "tasks");

        const currProject = document.createElement("div");
        currProject.setAttribute("id", "currProject");
        currProject.textContent = "Today";
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
            if(e.keyCode ===13 ){
                Data.addProject(new Project(e.target.value));
                plusBtn.click();
            }
        });
        addTask.appendChild(taskInput);

       


        tasksArea.appendChild(addTask);

        return tasksArea;
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
        console.log(sidebar.childNodes);
        for(let i = sidebar.children.lenth - 1; i >= 2; i--){
            sidebar.removeChild(sidebar.childNodes[i]);
            
        }
    }
}


