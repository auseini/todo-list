import { toDate, isToday, isThisWeek, subDays } from 'date-fns';

export default class Task{
    constructor(name){
        this.name = name;
        this.date = "No Date";
        this.description = "";
    }

    //getters/setters for name
    set name(name){
        this.name = name;
    }
    get name(){
        return this.name;
    }

    //setters/getters for date
    set date(date){
        this.date = date;
    }
    get date(){
        return this.date;
    }

    //setters/getters for disc
    set description(description){
        this.description = description;
    }
    get description(){
        return this.description;
    }

}