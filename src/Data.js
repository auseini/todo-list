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
        todoList.projects= todoList.projects
            .map((project) => Object.assign(new Project(), project));

        todoList
            .projects
            .forEach((project) => project.tasks= 
                project.tasks.map((task) => Object.assign(new Task(), task)));
        console.log(todoList.projects);
      return todoList;
    }
    
    static addProject(name){
        const list = Data.getTodoList();
        list.addProject(name);
        Data.saveTodoList(list);
        DOM.updateProjects();
    }

    static deleteProject(name){
        const list = Data.getTodoList();
        list.deleteProject(name);
        Data.saveTodoList(list);
        DOM.updateProjects();
       
        console.log("delete")
    }
    
    static renameProject(name){

        console.log("rename")
    }
}