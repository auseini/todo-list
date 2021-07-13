import Project from "./project";
import Task from "./task";
import { toDate, isToday, isThisWeek, subDays, compareAsc, startOfDay } from 'date-fns';

export default class TodoList {
    constructor(){
        //initialize project holder and add twoprojec
        this.projects = [];
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("Overdue"));
    }

    //setters/getter for projects
    set projects(projects){
        this.projects = projects;
    }
    get projects(){
        return this.projects;
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
        this.projects.push(project);
    }
    //function to delete project
    deleteProject(projectName){
        let project = this.getProject(projectName);
        //splixe array
        this.projects.splice(this.projects.indexOf(project), 1);
    }

    //function to update todays project
    updateToday(){
        let today = this.getProject("Today");


        //remove entries from today that are no longer today, and move them to Overdue
        today.forEach((task) => {
           if(compareAsc(startOfDay, task.date)) {
               today.splice(today.indexOf(task), 1);
               this.getProject("Overdue").addTask(task);
           }
        });


        this.projects.array.forEach(project => {
            if(project.name === "Today" || project.name === "Overdue")
                return;
            //loop through all projects and add todays tasks if they arent already in project
            project.forEach((task) => {
                if (isToday(task.date)){
                    if(!today.contains(task)){
                        today.addTask(task);
                    }
                }
            })
        });
    }

}