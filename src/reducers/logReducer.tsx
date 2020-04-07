import { ADD_LOG } from '../constants';

const initialState = {
    log: []
};

const logReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_LOG:
            let currentLog: string[] = state.log;
            currentLog.push(action.payload);
            return {
                ...state,
                log: currentLog
            };
        
        default:
            return state;
        }
}

export default logReducer;