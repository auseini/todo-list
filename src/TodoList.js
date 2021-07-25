import Project from "./Project";
import { getYear, getDate, getMonth } from 'date-fns';

export default class TodoList {
    constructor(){
        //initialize project holder and add twoprojec
        this._projects = [];
        this._projects.push(new Project("Today"));
        this._projects.push(new Project("Overdue"));
    }

    //setters/getter for projects
    set projects(projects){
        this._projects = projects;
    }
    get projects(){
        return this._projects;
    }

    //get individual project
    getProject(name){
        return this.projects.find((project) => project.name === name);
    }

    //check if project is contained
    contains(projectName){
        return this.projects.some((project) => project.name === projectName);
    }

    //add project to projects
    addProject(project){
        console.log(typeof this.getProject(project.name));
        if(typeof this.getProject(project.name) != "undefined"){
            alert("Project with name '" + project.name +"' already exists."); 

            return;
        }
       this.projects.push(project);
    }
    //function to delete project
    deleteProject(projectName){
      
        if(projectName === "Today" || projectName === "Overdue") return;
    
        let project = this.getProject(projectName);
        let index = (this.projects.indexOf(project));
        
        if(index === -1) return;

        //splice array
        this.projects.splice(index, 1);
    }

    //function to update todays project
    updateToday(){
        let today = this.getProject("Today");
        let date = new Date();

        let testDate = getYear(date) + '-' + ((+getMonth(date)) + 1) + '-' + getDate(date);
        

        //remove entries from today that are no longer today, and move them to Overdue
        today.tasks.forEach((task) => {
           if(task.date !== testDate) {
               today.tasks.splice(today.tasks.indexOf(task), 1);
               this.getProject("Overdue").addTask(task);
           }
        });

    }

}