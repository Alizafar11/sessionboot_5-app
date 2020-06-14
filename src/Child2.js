import React, { useReducer } from 'react';
import CountReducer from './CountReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CountReducer, 1);
    
    return(
        <div>
            <h1> this is the 2nd child  Count reducer.</h1>
            <h3>value of the reducer is :{state}</h3>
            <button onClick={() =>dispatch('INCREMENT')}>
                 increment reducer 
            </button>
        </div>
    )
}
export default Child2;