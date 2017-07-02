import React, {Component} from 'react';
import {observer} from 'mobx-react'

@observer
class Temp extends Component{
    render() {
        const {t} =this.props
        return (
            <div>
                <input type="text" onChange={(e) => t.setTemperature(+e.target.value)} />
                    {t.temperature}
                    <button onClick={()=> t.setUnit("K")}>K</button>
                    <button onClick={()=> t.setUnit("F")}>F</button>
                    <button onClick={()=> t.setUnit("C")}>C</button>
            </div>
        )
    }
}
export default Temp