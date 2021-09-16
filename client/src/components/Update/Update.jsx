import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSensor } from '../../redux/Action';
import { useForm } from 'react-hook-form'

const Update = (props) => {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({ defaultValues: props.currentSensor })
    setValue('name', props.currentSensor.name)
    setValue('id', props.currentSensor.id)
    setValue('active', props.currentSensor.active)
    setValue('latitude', props.currentSensor.latitude)
    setValue('longitude', props.currentSensor.longitude)
    setValue('minval', props.currentSensor.minval)
    setValue('maxval', props.currentSensor.maxval)

    const onSubmit = (data, e) => {
        console.log(data)
        dispatch(updateSensor(data))
        e.target.reset()
        props.setEdit(false)
    }


    return (
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
                <option value="0">Inactive</option>
            </select>
            <p>{errors.active?.message}</p>
         
            <button className='button' type="submit" >Add Sensor</button>
        </form>

    )
}


export default Update