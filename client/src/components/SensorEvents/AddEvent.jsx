import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createSensorEvent, getSensorEvents } from '../../redux/Action/index';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router';

const AddEvent = () => {
    const dispatch = useDispatch()
    const { id } = useParams() 
    const { register, formState : { errors }, handleSubmit } = useForm() 

    const message = useSelector((state) => state.message)
    const onSubmit = (data, e) => {
        data = {...data, id:id}
        dispatch(createSensorEvent(data))

        e.target.reset()
    }

    useEffect(() => {
        dispatch(getSensorEvents(id))
    }, [message, dispatch, id])


    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>{id}</label>
                <hr/>
                <label>Value</label><input {...register("value", {
                    required: {
                        value: true,
                        message: 'Value is required'
                    }
                })
                } />
                <p>{errors.value?.message}</p>
                {errors.value?null:<button className='button' type="submit" >Add Event</button>}
            </form>
    )
}

export default AddEvent