import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createSensorEvent, getSensorEvents } from '../../redux/Action/index';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const AddEvent = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const message = useSelector((state) => state.message)
    
    const onSubmit = (data, e) => {
        data = { ...data, id: id }
        dispatch(createSensorEvent(data))
        console.log(data)
        e.target.reset()
    }

    const sensors = useSelector((state) => state.sensors)
    const sensor = sensors.find(e => e.id == id)

    useEffect(() => {
        dispatch(getSensorEvents(id))
    }, [message, dispatch, id])



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Id:</label>
            <label>{id}</label>
            <hr />
            <label>Value</label>
            {sensor.active == '0'
                ?    <label>Sensor Inactive</label>
                : (<input {...register("value", {
                    required: {
                        value: true,
                        message: 'Value is required'
                    }
                })
                } />
                )
                
            }
            <p>{errors.value?.message}</p>
            {errors.value ? null : <button className='button' type="submit" >Add Event</button>}
            <Link to={`/sensor`}> <button className='button'>Back</button> </Link>
        </form>
    )
}

export default AddEvent