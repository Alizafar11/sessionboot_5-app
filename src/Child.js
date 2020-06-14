import React, { useContext } from 'react';

import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterContext)
    return (
        <div>
            <h2>this is first child</h2>
            <h4> counter value is : {counterValue}</h4>
        </div>
    )
}
export default Child;