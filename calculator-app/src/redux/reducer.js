import * as actionTypes from './reducerConstant';
const initialState = {
    TotalSum:0,
    number1:0,
    number2:0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_CALULATOR:
            console.log("[From Redux]",action);            
            return {
                ...state,
                TotalSum:action.state.number1+ action.state.number2
            };
        case actionTypes.SUBTRACT_CALULATOR:
            return {
                ...state,
                TotalSum:action.state.number1 - action.state.number2
            };
        case actionTypes.MULTIPLY_CALULATOR:
            return  {
                ...state,
                TotalSum:(action.state.number1*action.state.number2)
             };
        case actionTypes.DEVISION_CALULATOR:           
            return {
                    ...state,
                    TotalSum:(action.state.number1/action.state.number2)
                 };
        default:
            return state;
    }
};

export default reducer;