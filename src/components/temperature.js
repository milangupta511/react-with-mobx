import React, {Component} from 'react';
import Temp from './temp';
import {observer, inject} from 'mobx-react';

@inject("temps")
@observer
class Temperature extends Component {
    render(){
        const {temps} = this.props
        return(
            <div>{temps.temps.map(t=> <Temp key={t.id} t={t} />)}
                   Enter temperatue in celsius: <input type="text" ref={(input) => this.textInput = input}/><button onClick={this.addTemperature}>Add new Temperature</button> 
            </div>
        )
    }
    addTemperature = () => {
        console.log(this.textInput);
        this.props.temps.addTemperature(+this.textInput.value, "C");
    }
}
export default Temperature;