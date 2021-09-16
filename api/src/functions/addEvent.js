const  addEvent = async(sensorSchema, sensorEventSchema, id, value) => {
    
    const data = {
        sensorId: id,
        value: value
    }
    const sensor = await sensorSchema.findById(id)
    const newEvent = await new sensorEventSchema(data)
    newEvent.save()
    !sensor.minval && !sensor.maxval
        ? sensorSchema.findByIdAndUpdate(id, { ...sensor, minval: value, maxval: value })
        : sensor.maxval < value
            ? sensorSchema.findByIdAndUpdate(id, { ...sensor, maxval: value })
            : sensor.minval > value
                ? sensorSchema.findByIdAndUpdate(id, { ...sensor, minval: value })
                : null

    return  res.send(`Event ${newEvent._id} created`)
    
}

module.esports = addEvent