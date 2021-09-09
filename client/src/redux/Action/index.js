import axios from 'axios';
import {
    GET_URL,
    GET_SENSORS,
    CREATE_SENSOR,
    UPDATE_SENSOR,
    DELETE_SENSOR,
    GET_SENSOR_EVENTS,
    CREATE_SENSOR_EVENT
} from './constants'

export const getSensors = () => async (dispatch) => {
    try {
        const res = await axios.get(`${GET_URL}sensors`)
        dispatch({ type: GET_SENSORS, payload: res.data })
    } catch (error) {
        console.error(error)
    }
}

export const createSensor = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${GET_URL}sensors`, data)
        dispatch({ type: CREATE_SENSOR, payload: res.data })
    } catch (error) {
        console.error(error)
        dispatch({ type: CREATE_SENSOR, payload: 'There is not data' })
    }
}

export const updateSensor = (data) => async (dispatch) => {
    try {
        const res = await axios.put(`${GET_URL}sensors`, data)
        dispatch({ type: UPDATE_SENSOR, payload: res.data })
    } catch (error) {
        console.error(error)
    }
}

export const deleteSensor = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${GET_URL}sensors/${id}`)
        dispatch({ type: DELETE_SENSOR, payload: res.data })
    } catch (error) {
        console.error(error)
    }
}

export const getSensorEvents = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${GET_URL}sensorEvents/${id}`)
        dispatch({ type: GET_SENSOR_EVENTS, payload: res.data })
    } catch (error) {
        console.error(error)
    }
}

export const createSensorEvent = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${GET_URL}sensorEvents`, data)
        dispatch({ type: CREATE_SENSOR_EVENT, payload: res.data })
    } catch (error) {
        console.error(error)
        dispatch({ type: CREATE_SENSOR_EVENT, payload: 'There is not data' })
    }
}