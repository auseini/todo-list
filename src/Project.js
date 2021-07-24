import { toDate, isToday,  getDate, getMonth, getYear, format } from 'date-fns';
import Task from './Task';

export default class Project{
    constructor(name){
        this._name = name;
        this._tasks = [];
    }

    //func to set name
    set name(name){
        this._name = name;
    }
    //func to get name
    get name(){
        return this._name;
    }
    //func to import tasks
    set tasks(tasks){
        this._tasks = tasks;
    }
    //func to get tasks
    get tasks(){
        return this._tasks;
    }

    //function to get specific task
    getTask(name){
        return this.tasks.find( (task) => task.name === name);
    }

    //func to add task
    addTask(task, projectName){
        
        if(projectName === "Today"){
            let today = new Date();
            task.date = getYear(today) + '-' + ((+getMonth(today)) + 1) + '-' + getDate(today);
        }

        if(this.contains(task.name)){
            alert("Task named '" + task.name + "' already exists");
            return;
        } 
        this.tasks.push(task);
    }
    //func to remove task
    removeTask(taskName){
        //need to find task by name, otherwise objexts arent exactyl the same
        let task = this.getTask(taskName);
        let index = this.tasks.indexOf(task);
        
        if(index === -1) return;

        this.tasks.splice(index, 1);
    }
    //check if task already exists
    contains(name){
        return this.tasks.some((task) => task.name === name);
    }

    //get todays tasks
    getToday(){
        //filter tasks for each element with todays date
        return this.tasks.filter((task) => {
            const date = new Date(task.date);
            return isToday(toDate(date));
        }
        );
    }

}