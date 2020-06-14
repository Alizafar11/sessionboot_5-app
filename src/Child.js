import React, { useContext } from 'react';

import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    
    return (
        <div>
            <h2>this is first child using context</h2>
            <h4> counter value is : {counterValue[0]}</h4>

            <button onClick={()=>{counterValue[1](++counterValue[0])}}> Increament </button>
        </div>
    )
}
export default Child;