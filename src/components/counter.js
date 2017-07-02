import React from 'react';
import {observer,inject} from 'mobx-react';

@inject("counter")
@observer
class Counter extends React.Component {
    render(){
    let {counter} = this.props;
        return (<div>
                Counter: {counter.count}
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
      </div>
        )
    }
}
export default Counter;