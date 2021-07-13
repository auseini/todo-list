import { toDate, isToday, isThisWeek, subDays } from 'date-fns';


export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    //func to set name
    setName(name){
        this.name = name;
    }
    //func to get name
    get name(){
        return this.name;
    }
    //func to import tasks
    setTasks(tasks){
        this.tasks = tasks;
    }
    //func to get tasks
    get tasks(){
        return this.tasks;
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