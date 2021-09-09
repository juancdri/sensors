import React from "react";
import { StyledTable } from '../Sensor/styled'

const Events = event => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>SensorId</th>
                    <th>Created At</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.sensorId.id}</td>
                    <td>{event.createdAt}</td>
                    <td>{event.value}</td>
                </tr>
            </tbody>


        </StyledTable>
    )
}

export default Events