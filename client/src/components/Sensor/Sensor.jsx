import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteSensor, getSensors } from '../../redux/Action/index';
import { StyledTable } from './styled';
import { Link } from "react-router-dom";

const Sensor = sensor => {
    const dispatch = useDispatch()
    const message = useSelector((state) => state.message)

    const handleClick = () => {
        dispatch(deleteSensor(sensor.id))
    }

    useEffect(() => {
        dispatch(getSensors())
    }, [message, dispatch])
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Location</th>
                    <th>Active</th>
                    <th>Minval</th>
                    <th>Maxval</th>
                </tr>
            </thead>
            <tbody>
                <tr key={sensor.id}>
                    <Link to={`/sensorEvents/${sensor.id}`}><td>{sensor.name}</td> </Link>
                    <td>{sensor.id}</td>
                    <td>{sensor.location.latitude} / {sensor.location.longitude}</td>
                    <td>{sensor.active === "Active" ? "✅" : "❌"}</td>
                    <td>{sensor.minval}</td>
                    <td>{sensor.maxval}</td>
                    <td>
                        <button onClick={() => { sensor.editSensor(sensor) }}>Edit</button>
                    </td>
                    <td>
                        <button onClick={handleClick}>Delete</button>
                    </td>
                </tr>
            </tbody>


        </StyledTable>
    )
}

export default Sensor