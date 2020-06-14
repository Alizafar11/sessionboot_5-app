const CountReducer = (state, action) => {
    // eslint-disable-next-line 
    switch (action) {
        case 'INCREMENT':
            return state + 1
    }
}
export default CountReducer;