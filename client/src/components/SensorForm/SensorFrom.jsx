import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createSensor, getSensors } from '../../redux/Action/index';
import { useForm } from 'react-hook-form'
import { StyledDiv } from './styled';

const SensorForm = () => {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const message = useSelector((state) => state.message)

    const onSubmit = (data, e) => {
        console.log(data)
        dispatch(createSensor(data))

        e.target.reset()
    }

    useEffect(() => {
        dispatch(getSensors())
    }, [message])


    return (
        <StyledDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label><input {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    }
                })
                } />
                <p>{errors.name?.message}</p>
                <label>Latitude</label><input {...register("latitude", {
                    required: {
                        value: true,
                        message: 'Latitude is required'
                    }
                })
                } />
                <p>{errors.latitude?.message}</p>
                <label>Longitude</label><input {...register("longitude", {
                    required: {
                        value: true,
                        message: 'Longitude is required'
                    }
                })
                } />
                <p>{errors.longitude?.message}</p>
                <label>Active</label><select {...register("active", {
                    required: {
                        value: true,
                        message: 'Active is required'
                    }
                })
                }>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <p>{errors.active?.message}</p>
                <label>Minval</label><input {...register("minval", {
                    required: {
                        value: true,
                        message: 'Min. value is required'
                    }
                })
                } />
                <p>{errors.minval?.message}</p>
                <label>Maxval</label><input{...register("maxval", {
                    required: {
                        value: true,
                        message: 'Max. value is required'
                    }
                })
                } />
                <p>{errors.maxval?.message}</p>
                <button className='button' type="submit" >Add Sensor</button>
            </form>
        </StyledDiv>
    )
}

export default SensorForm