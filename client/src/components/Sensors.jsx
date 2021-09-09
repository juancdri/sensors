import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getSensors } from '../redux/Action/index';
import Sensor from './Sensor';
import SensorForm from "./SensorFrom";

const Sensors = () => {
    const dispatch = useDispatch()
    const sensors = useSelector((state) => state.sensors)

    useEffect(() => {
        dispatch(getSensors())
    }, [])

    return (
        <div>
            <div>
                <h2>Create Sensor</h2>
            </div>
            <SensorForm/>
            <div>
                <h2>Sensors</h2>
            </div>
            {sensors.length
                ? sensors.map(el => (
                    <Sensor
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        location={el.location}
                        active={el.active}
                        minval={el.minval}
                        maxval={el.maxval}
                    />
                ))
                : <h3>No sensors</h3>
            }

        </div>
    )
}

export default Sensors