import React from 'react';
import {inject} from 'mobx-react';
@inject("weatherList")
class AddCity extends React.Component {
    render() {
        return (
            <form method="POST" onSubmit={(e)=> this.handleCitySearch(e)} >
                <input type="text" ref={(input) => this.searchCity=input} />
                <button type="submit"> Search</button>
            </form>
        )
    }
    handleCitySearch = (e) => {
        e.preventDefault();
        this.props.weatherList.addCity(this.searchCity.value);
    }
}
export default AddCity;