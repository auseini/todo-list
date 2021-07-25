export default class Task{
    constructor(name){
        this._name = name;
        this._date = "No Date";
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


}