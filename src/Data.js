import TodoList from "./TodoList";
import Project from "./Project";
import Task from "./Task";
import DOM from "./DOM";



export default class Data{
    static saveTodoList(list){
        localStorage.setItem("todoList", JSON.stringify(list));
    }

    static getTodoList(){
        //get todolist from local storage
        const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem("todoList")));
    
        //need to populate arrays with info from local storage, otherwise it breaks
        todoList.projects = todoList.projects
            .map((project) => Object.assign(new Project(), project));

        todoList.projects
            .forEach((project) => project.tasks = 
                project.tasks.map((task) => Object.assign(new Task(), task)));
       
      return todoList;
    }
    
    static addProject(name){
        const list = Data.getTodoList();
        list.addProject(new Project(name));
        Data.saveTodoList(list);
        DOM.updateProjects();
    }

    static deleteProject(name){
        const list = Data.getTodoList();
        list.deleteProject(name);
        Data.saveTodoList(list);
        DOM.updateProjects();

    } 
    static renameProject(name){
        const list = Data.getTodoList();
        let newName = prompt("Please enter a new name", name);
        

        if(typeof list.getProject(newName) === "undefined"){
           const project = list.getProject(name);
            project.name = newName;

            Data.saveTodoList(list);  
            DOM.updateProjects();
            document.getElementById(newName).click(); 
        } else{
            alert("Project with name '" + newName + "' already exists.");
        }
        
    }

    static addTask(projectName, task){
        const list = Data.getTodoList();
        list.getProject(projectName).addTask(task, projectName);
        Data.saveTodoList(list);
        DOM.updateTasks();
    }
    static deleteTask(projectName, task){
        const list = Data.getTodoList();
        list.getProject(projectName).removeTask(task.name);
        Data.saveTodoList(list);
        DOM.updateTasks();
    }

}