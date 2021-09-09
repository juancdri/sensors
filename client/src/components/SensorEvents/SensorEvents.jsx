import React, { useEffect } from 'react';
import { StyledDiv } from '../Sensors/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSensorEvents } from '../../redux/Action';
import Events from './Events';
import AddEvent from './AddEvent';

const SensorEvents = () => {
    const dispatch = useDispatch()
    const sensorEvents = useSelector((state) => state.sensorEvents)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSensorEvents(id));
    }, [dispatch, id]);
    return (
        <StyledDiv>
            <div className='form'>
                        <h2>Create Event</h2>
                        <AddEvent />
                    </div>
            <div className='sensors' >
                {sensorEvents.length? <h2>{`Events of ${sensorEvents[0].sensorId.name}`}</h2>: null}
                <div className='list'>
                    {sensorEvents.length
                        ? sensorEvents.map(el => (
                            <Events
                                key={el.id}
                                id={el.id}
                                sensorId={el.sensorId}
                                createdAt={el.createdAt}
                                value={el.value}
                            />
                        ))
                        : <h3>No Events</h3>
                    }
                </div>
            </div>
        </StyledDiv>
    )
}
export default SensorEvents