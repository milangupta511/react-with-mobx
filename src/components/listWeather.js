import React from 'react';
import {observer,inject} from 'mobx-react';

@inject("weatherList")
@observer
class ListWeather extends React.Component {
    render() {
        return (
            <div>
            {this.props.weatherList.weatherList.map((t)=>{
                if(t.isLoading){
                    return (<li>Loading...</li>)
                }else {
                     return (<li>{t.location} : {t.temp}</li>)
                }
            })
            }
            </div>
        )
    }
}
export default ListWeather