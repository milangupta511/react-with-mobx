import React from 'react';
import ReactDOM from 'react-dom';
import {observable, computed, action} from 'mobx';
import {Provider} from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const API = "9473213223a0e83d0951650fc3301964";

const counter = observable({
    count: 0
})
counter.increment = function() {
    this.count++;
};

counter.decrement = function() {
    this.count--;
};
class Temperature {
    id=Math.random();
    @observable unit = "C";
    @observable temperatureCelsius =25;
    constructor(temperatureCelsius, unit){
        this.temperatureCelsius = temperatureCelsius ||this.temperatureCelsius;
        this.unit = unit || this.unit
    }

    @computed get temperatureKelvin(){
        return this.temperatureCelsius + 273
    }

    @computed get temperatureFarenheit(){
        return this.temperatureCelsius*(9/5) +32
    }
    @computed get temperature(){
        switch(this.unit) {
            case "K":
                return `${this.temperatureKelvin} K`
            case "F":
                return `${this.temperatureFarenheit} F`
            case "C":
            return `${this.temperatureCelsius} C`
            default:
                return `${this.temperatureCelsius} C`
        }
    }
    @action("Update the unit") setUnit(unit) {
        this.unit = unit || "C";
    }
    @action("update the temperature") setTemperature(temperature) {
        this.temperatureCelsius = (parseInt(temperature)||parseInt(temperature)===0)?temperature:25
    }
}
class Temps {
    @observable temps=[]
    @action addTemperature(temp, unit) {
        this.temps.push(new Temperature(temp, unit))
    }
}

const temps = new Temps();
temps.addTemperature(25, "C");

class Todo {
    id=Math.random();
    @observable task ="";
    @observable isCompleted = false;
    constructor(task) {
        this.task = task || this.task;
    }
    
    @action("toggle completion of todo") 
    toggleCompleted (id) {
        this.isCompleted = !this.isCompleted
    }
}
class Todos {
    @observable todoList =[]

    @action ("add a task")
    addTodo(task) {
        this.todoList.push(new Todo(task))
    }
}
class Weather {
    @observable temp=25;
    @observable isLoading = true;
    @observable location = "New Delhi";
    constructor (location) {
        this.location = location
        this.fetch();
    }
    @action fetch() {
        window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${API}`)
              .then((res) => res.json())
              .then((json) => this.onFetchSuccess(json))
    }
    @action onFetchSuccess(json) {
        this.temp = json.main.temp-273;
        this.location = `${json.name}, ${json.sys.country}`
        this.isLoading = false
    }
}
class WeatherList {
    @observable weatherList=[];
    @action addCity(location){
        this.weatherList.push(new Weather(location));
    }
}
const todos = new Todos();
const weatherList = new WeatherList();
const store ={
    counter,temps,todos,weatherList
}
ReactDOM.render(
    <Provider {...store}> 
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
