import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
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
    addTask(task){
        if(contains(this.tasks)) return;
        this.tasks.push(task);
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