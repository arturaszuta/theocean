import { ADD_LOG } from '../constants';

export function addLog(message: string) {
    return {
        type: ADD_LOG,
        payload: message
    }
}