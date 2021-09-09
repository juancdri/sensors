import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getSensors } from '../../redux/Action/index'
import Sensor from '../Sensor/Sensor'
import SensorForm from "../SensorForm/SensorFrom"
import Update from "../Update/Update"
import { StyledDiv } from './styled'

const Sensors = () => {
    const dispatch = useDispatch()
    const sensors = useSelector((state) => state.sensors)
    const [edit, setEdit] = useState(false)
    const [currentSensor, setCurrentSensor] = useState({
        id: '',
        name: '',
        latitude: '',
        longitude: '',
        active: '',
        minval: '',
        maxval: ''
    })

    const editSensor = (sensor) => {
        setEdit(true)

        setCurrentSensor({
            id: sensor.id,
            name: sensor.name,
            latitude: sensor.location.latitude,
            longitude: sensor.location.longitude,
            active: sensor.active,
            minval: sensor.minval,
            maxval: sensor.maxval
        })
        console.log(sensor.active)
    }

    useEffect(() => {
        dispatch(getSensors())
    }, [])

    return (
        <StyledDiv>
            {edit
                ? (<div className='form'>
                    <h2>Update</h2>
                    <Update currentSensor={currentSensor} setEdit={setEdit} />
                </div>) : (
                    <div className='form'>
                        <h2>Create Sensor</h2>
                        <SensorForm />
                    </div>)}

            <div className='sensors' >
                <h2>Sensors</h2>
                <div className='list'>
                    {sensors.length
                        ? sensors.map(el => (
                            <Sensor
                                editSensor={editSensor}
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