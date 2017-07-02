import React from 'react';
import AddCity from './addCity';
import ListWeather from './listWeather';

class Weather extends React.Component {
    render(){
        return(
            <div>
            <AddCity/>
            <ListWeather />
            </div>
        )
    }
}
export default Weather;