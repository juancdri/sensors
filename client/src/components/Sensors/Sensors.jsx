import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getSensors } from '../../redux/Action/index';
import Sensor from '../Sensor/Sensor';
import SensorForm from "../SensorForm/SensorFrom";
import { StyledDiv } from './styled'

const Sensors = () => {
    const dispatch = useDispatch()
    const sensors = useSelector((state) => state.sensors)

    useEffect(() => {
        dispatch(getSensors())
    }, [])

    return (
        <StyledDiv>
            <div className='form'>
                <h2>Create Sensor</h2>
                <SensorForm />
            </div>

            <div className='sensors' >
                <h2>Sensors</h2>
                <div  className='list'>
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
            </div>

        </StyledDiv>
    )
}

export default Sensors