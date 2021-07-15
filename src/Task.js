import { toDate, isToday, isThisWeek, subDays } from 'date-fns';

export default class Task{
    constructor(name){
        this._name = name;
        this._date = "No Date";
        this._description = "";
    }

    //getters/setters for name
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }

    //setters/getters for date
    set date(date){
        this._date = date;
    }
    get date(){
        return this._date;
    }

    //setters/getters for disc
    set description(description){
        this._description = description;
    }
    get description(){
        return this._description;
    }

}