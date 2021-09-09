import React, { useReducer } from "react";
import { Link } from 'react-router-dom';

const Sensor = sensor => {


    return (
        <div>
            <table>
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
                            <td>{sensor.name}</td>
                            <td>{sensor.id}</td>
                            <td>{sensor.location.latitude} / {sensor.location.longitude}</td>
                            <td>{sensor.active ? "✅" : "❌"}</td>
                            <td>{sensor.minval}</td>
                            <td>{sensor.maxval}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                </tbody>
            </table>





            {/* <Link to={`/sensor/${id}`} >
                <h3>{name}</h3>
            </Link>
            <span> {id} </span>
            <span> {location.latitude} / {location.longitude} </span>
            <span> {active ? "✅" : "❌"} </span>
            <span> {minval} </span>
            <span> {maxval} </span> */}
        </div>
    )
}

export default Sensor