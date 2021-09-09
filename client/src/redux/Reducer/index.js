import {
    GET_SENSORS,
    CREATE_SENSOR,
    UPDATE_SENSOR,
    DELETE_SENSOR,
    GET_SENSOR_EVENTS,
    CREATE_SENSOR_EVENT
} from '../Action/constants'


const initialState ={
    sensors:[],
    sensorDetail:{},
    sensorEvents:[],
    message:''
}

const rootReducer = (state = initialState, {payload,type}) => {
    switch(type){
        case GET_SENSORS :
        return{
            ...state,
            sensors:payload
        };
        case CREATE_SENSOR :
        return{
            ...state,
            message:payload
        };
        case UPDATE_SENSOR :
        return{
            ...state,
            message:payload
        };
        case DELETE_SENSOR :
        return{
            ...state,
            message:payload
        };
        case GET_SENSOR_EVENTS :
        return{
            ...state,
            sensorEvents:payload
        };
        case CREATE_SENSOR_EVENT :
        return{
            ...state,
            message:payload
        };
        default:
        return state;}
}

export default rootReducer